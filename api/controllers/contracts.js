const _ = require('lodash');
const db = require('../db');
const { ContractSchema } = require('../schema/contract');

const INVALID_INPUT = 'Invalid input.';

function listAll(req, res) {
    res.json({ contracts: db.getAll() });
}

function list(req, res) {
    const id = req.params.id;
    const contract = db.get(id);
    if (!contract) {
        return res.status(404).json({ message: `No contract found with ID ${id}.` });
    }
    res.json({ contract });
}

function update(req, res) {
    const contract2update = req.body || {};
    if (Object.keys(contract2update).length === 0) {
        return res.status(400).json({ message: INVALID_INPUT, error: 'Input object is empty.' });
    }
    contract2update.id = parseInt(req.params.id);
    const valid = ContractSchema.validate(contract2update, { convert: false });
    if (valid.error) {
        return res.status(400).json({ message: INVALID_INPUT, error: _.get(valid, 'error.details[0].message') });
    }
    const contract = db.update(contract2update);
    res.json({ contract });
}

module.exports = { listAll, list, update };
