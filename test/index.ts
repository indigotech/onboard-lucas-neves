import "module-alias/register";
import { setupServer } from "../src/graphql/graphql-server";
import { setupDb } from "@db/config";

const request = require("supertest");

describe("hello test", function () {
  before(async () => {
    await setupDb();
    await setupServer();
  });
  it("hello query", async function () {
    request("localhost:4000")
      .post("/graphql")
      .send({
        query: "{ hello }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        console.log(res.text);
      });
  });
});
