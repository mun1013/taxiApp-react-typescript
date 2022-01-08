const request = require('supertest');
const app = require('../app');

test('Fetch taxi drivers', async () => {
  const response = await request(app)
    .get('/taxi/1.285194/103.8522982/1')
    .send()
    .expect(200)

    expect(response.body.length).toEqual(1)
})