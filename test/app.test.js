// test/app.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Express App', () => {
  it('should return 200 for root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
  });

  it('should return 200 for health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('healthy');
  });

  it('should return users list', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});