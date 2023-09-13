const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app.js");

describe("/POST /api", () => {
  it("should fail when no data is sent", async () => {
    const res = await request(app).post(`/api`);
    expect(res.status).to.equal(500);
  });

  it("should create new user", async () => {
    const examplePersonData = { name: "Juliana Angels" };
    const res = await request(app).post(`/api`).send(examplePersonData);
    expect(res.status).to.equal(200);
  });
});
