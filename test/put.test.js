const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app.js");

describe("PUT /api", () => {
  it("should fail when it is only /api", async () => {
    const res = await request(app).put("/api");
    expect(res.status).to.equal(404);
  });

  it("should make update to existing user", async () => {
    const randName = `NONSO${Math.random() * 5000}`;

    const newPersonData = { name: randName };
    const res = await request(app).put(`/api/BNXN`).send(newPersonData);
    expect(res.status).to.equal(200);
  });
});
