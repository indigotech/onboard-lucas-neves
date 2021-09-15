import "module-alias/register";
import { setupServer } from "../src/graphql/graphql-server";
import { setupDb } from "@db/config";
import { expect } from "chai";
import * as request from "supertest";
import * as dotenv from "dotenv";
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
    await request("localhost:4000")
      .post("/graphql")
      .send({
        query:
          'mutation { createUser(data: {name: "Nome", birthDate: "birth", email: "teste@teste1323f23332333.com", password: "adasdgh5jak"}){id name email birthDate} }',
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.data.createUser).to.have.property("id");
        expect(res.body.data.createUser).to.have.property("name");
        expect(res.body.data.createUser).to.have.property("email");
        expect(res.body.data.createUser).to.have.property("birthDate");
      });
  });
  it("test three: check with user was created", async function () {
    const user = await User.findOne();
    expect(user).to.have.property("id");
    expect(user).to.have.property("name");
    expect(user).to.have.property("email");
    expect(user).to.have.property("birthDate");
  });
  after(function () {
    User.delete({});
  });
});
