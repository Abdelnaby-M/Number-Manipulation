import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses from endpoints', (): void => {

  describe('endpoint: /', (): void => {
    it('returns 404 for invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');

      expect(response.status).toBe(404);
    });
  });

  describe('endpoint: /manipulation', (): void => {
    it('posts /manipulation (no args)', async (): Promise<void> => {
      const response: supertest.Response = await request.post('/manipulation')

      expect(response.status).toBe(200);
    });
  });

});