const supertest = require('supertest');
const app = require('./index.js');

const request = supertest(app);

test("Deve retornar 200 no GET", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);
});