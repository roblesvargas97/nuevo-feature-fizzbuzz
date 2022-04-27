const request = require("supertest");
const app = require("../../lib/app");

describe("Test the root path ", () => {
    test("response should be 200 ", async (done) => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        done();
    });
});

describe("Explorers get mission", () => {
    test("expect 200 status ", async (done) => {
        const response = await request(app).get("/v1/explorers/node");
        expect(response.statusCode).toBe(200);
        done();
    });

    test("each element should have node mission", async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/" + parameter);
        response.body.forEach(element => {
            expect(element.mission).toBe("node");
        });
        done();
    });
});

describe("Explorers get amount of explorers",  () => {
    test("Expect 200",async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/amount/" + parameter);
        expect(response.status).toBe(200);
        done();
    });

    test("Amount explorers in node mission ", async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/" + parameter);
        const amountExplorersInNode = response.body.length;
        const reponseAmount = await request(app).get("/v1/explorers/amount/" + parameter);
        expect(reponseAmount.body.quantity).toEqual(amountExplorersInNode);
        done();
    });

});

describe("Gat Node Explorers by name",  () => {
    test("Expect 200",async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/usernames/" + parameter);
        expect(response.status).toBe(200);
        done();
    });

    test("Amount explorers in node by name ", async (done) => {
        const parameter = "node";
        const response = await request(app).get("/v1/explorers/" + parameter);
        const amountExplorersInNode = response.body.length;
        const reponseAmount = await request(app).get("/v1/explorers/usernames/" + parameter);
        expect(reponseAmount.body.explorers.length).toEqual(amountExplorersInNode);
        done();
    });

});
