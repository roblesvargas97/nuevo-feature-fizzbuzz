const request = require("supertest");
const app = require("../../lib/app");

describe("Test the root path ", () => {
    test("should ", async (done) => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        done();
    });
});
