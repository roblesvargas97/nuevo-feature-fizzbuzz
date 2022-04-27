const request = require("supertest");
const app = require("../../lib/app");

describe("Test the root path ", () => {
    test("response should be 200 ", async (done) => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        done();
    });
});

describe("Explorer mission params", () => {
    test("should ", async (done) => {
        const response = await request(app).get("/v1/explorers/node");
        expect(response.statusCode).toBe(200);
        done();
    });

    test("should ", async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/" + parameter);
        response.body.forEach(element => {
            expect(element.mission).toBe("node");
        });
        done();
    });
});
