const request = require('supertest');
const app = require('../../../index');

describe('Github API Test', () => {
  it('get user contributions', async () => {
    const res = await request(app)
      .get('/api/contributions/luke0408')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(res);

    expect(res.body.totalContributions).toBeDefined();
    expect(res.body.weeks).toBeInstanceOf(Array);
  });
});
