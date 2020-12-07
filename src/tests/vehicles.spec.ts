import { agent } from 'supertest';

const request = agent('http://localhost:3333');

describe('magicthegathering.io API test', () => {
  it('should GET /vehicles', async () => {
    request
      .get('/vehicles')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it('Create POST /vehicles', async () => {
    request
      .post('/vehicles')
      .send({
        board: 'PTQ-8087',
        chassis: 'ASSAAS',
        renavam: 'uheheu',
        model: 'XRE 190',
        brand: 'Honda',
        year: '2020',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it('Update PUT /vehicles', async () => {
    request
      .put('/vehicles/teste')
      .send({
        board: 'PTQ-8087',
        chassis: 'ASSAAS',
        renavam: 'uheheu',
        model: 'XRE 190',
        brand: 'Honda',
        year: '2020',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it('Delete DELETE /vehicles', async () => {
    request
      .delete('/vehicles/teste')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
