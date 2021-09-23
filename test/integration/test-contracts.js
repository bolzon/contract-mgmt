const assert = require('assert');
const { doesNotMatch } = require('assert');
const chai = require('chai');
const server = require('../../server');
chai.use(require('chai-http'));
chai.should();

describe('Contracts', () => {

    describe('GET /contracts', () => {

        it('should list all', done => {
            chai.request(server)
                .get('/contracts')
                .end((err, res) => {
                    assert(err === null);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.contracts.should.be.a('array');
                    done();
                });
        });

        it('should list one', done => {
            chai.request(server)
                .get('/contracts/1')
                .end((err, res) => {
                    assert(err === null);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.contract.id.should.be.a('number');
                    res.body.contract.id.should.be.equal(1);
                    done();
                });
        })

    });

    describe('PUT /contracts', () => {

        it('should update total param', async () => {
            const newTotal = 11111111;
            const res = await chai.request(server)
                                  .put('/contracts/1')
                                  .send({ total: newTotal });
            res.should.have.status(200);
            res.body.contract.total.should.be.equal(newTotal);
        });

        it('should update auto renew param', async () => {
            const res = await chai.request(server)
                                  .put('/contracts/1')
                                  .send({ auto_renew: true });
            res.should.have.status(200);
            res.body.contract.auto_renew.should.be.true;
        });

        it('should not accept empty body', async () => {
            const res = await chai.request(server)
                                  .put('/contracts/1')
                                  .send({});
            res.should.have.status(400);
        });

        it('should not accept invalid parameters - total as string (integer)', async () => {
            const res = await chai.request(server)
                                  .put('/contracts/1')
                                  .send({ total: 'abc' });
            res.should.have.status(400);
        });

        it('should not accept invalid parameters - begin date wrong format (not ISO)', async () => {
            const res = await chai.request(server)
                                  .put('/contracts/1')
                                  .send({ beginDate: '1-2-3' });
            res.should.have.status(400);
        });

    });

});
