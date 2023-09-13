const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("./app.js");

describe("GET /api", () => {
  it("should return a list of persons", (done) => {
    request(app)
      .get("/api")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
      });

    it("should return a specific person data", async () => {
      const res = await request(app).get("/api/NONSO");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("_id"); // On the condition that response includes an 'id'
      expect(res.body).to.property("name");
    });
  });
});
