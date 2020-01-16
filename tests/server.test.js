const request = require('supertest');

const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      xit('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  xdescribe('/server/getInfo', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .post('/server/getInfo')
        .send({ api: ['API'], token: ['TOKEN'] })
        .expect('Content-Type', /application\/json/)
        .expect(200));

      it('contains nodeInfo in the response body', () => request(server)
        .post('/server/getInfo')
        .send({ api: ['API'], token: ['TOKEN'] })
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then((res) => {
          console.log(res.body);
          expect(res).toHaveProperty('body', ['MOCK RESPONSE OBJECT']);
        }));
    });
  });
});
