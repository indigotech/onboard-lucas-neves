import "module-alias/register";
import { setupServer } from "../src/graphql/graphql-server";
import { setupDb } from "@db/config";
import { expect } from "chai";
import * as request from "supertest";
import * as dotenv from "dotenv";

dotenv.config();

describe("hello test", function () {
  it("test one: setup server and database", async function () {
    await setupDb();
    await setupServer();
  });

  it("test two: hello query", async function () {
    request("localhost:4000")
      .post("/graphql")
      .send({
        query: "{ hello }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.text).to.be.eq('{"data":{"hello":"Hello, world!"}}\n');
      });
  });
});
