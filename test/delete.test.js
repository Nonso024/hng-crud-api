const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app.js");

describe("DELETE /api", () => {
  it("should delete existing users", async () => {
    const res = await request(app).delete(`/api/Joseph Ani`);
    expect(res.status).to.equal(201);
  });
});
