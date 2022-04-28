const request = require("supertest");
const app = require("../../../lib/app");

test("expect status 200", async () => {
    const response = await request(app).get("/v1/fizzbuzz/34");
    expect(response.status).toBe(200);
});

test("expect status 400", async () => {
    const response = await request(app).get("/v1/fizzbuzz/Hola");
    expect(response.status).toBe(400);
});