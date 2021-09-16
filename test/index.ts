import "module-alias/register";
import { setupServer } from "../src/graphql/graphql-server";
import { setupDb } from "@db/config";
import { expect } from "chai";
import * as request from "supertest";
import * as dotenv from "dotenv";
import * as bcrypt from "bcrypt";
import { User } from "@db/entity";

describe("hello test", function () {
  before("test one: setup server and database", async function () {
    dotenv.config({ path: `${__dirname}/../test.env` });
    await setupDb();
    await setupServer();
  });

  it("test one: hello query", async function () {
    await request("localhost:4000")
      .post("/graphql")
      .send({
        query: "{ hello }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.text).to.be.eq('{"data":{"hello":"Hello, world!"}}\n');
      });
  });

  it("test two: mutation createUser", async function () {
    const res = await request("localhost:4000")
      .post("/graphql")
      .send({
        query:
          'mutation { createUser(data: {name: "Nome", birthDate: "birth", email: "teste@teste.com", password: "senha123"}){id name email birthDate} }',
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body.data.createUser).to.have.property("id");
    expect(res.body.data.createUser).to.have.property("name");
    expect(res.body.data.createUser).to.have.property("email");
    expect(res.body.data.createUser).to.have.property("birthDate");
    expect(res.body.data.createUser.name).to.be.eq("Nome");
    expect(res.body.data.createUser.email).to.be.eq("teste@teste.com");
    expect(res.body.data.createUser.birthDate).to.be.eq("birth");

    const user = await User.findOne();
    expect(user.name).to.be.eq("Nome");
    expect(user.email).to.be.eq("teste@teste.com");
    expect(user.birthDate).to.be.eq("birth");
    expect(await bcrypt.compare("senha123", user.password)).to.be.true;
  });
  afterEach(async function () {
    await User.delete({});
  });
});
