// mocked database, but still functional as an in-memory db

const { merge } = require('lodash');
const CONTRACTS = require('./contracts').contracts;

const get = id => CONTRACTS.find(c => c.id === parseInt(id));

module.exports = {

    get,

    getAll: () => CONTRACTS,

    update: contract => {
        const dbContract = get(contract.id);
        if (dbContract) {
            merge(dbContract, contract);
        }
        return dbContract;
    }
};