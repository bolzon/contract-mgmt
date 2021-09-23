const joi = require('joi');

const ContractSchema = joi.object({
    auto_renew:             joi.boolean(),
    beginDate:              joi.string().pattern(/\d{4}-\d{2}-\d{2}$/, 'ISO date'),
    cancel_early:           joi.boolean(),
    currency_code:          joi.string(),
    description:            joi.string(),
    duration:               joi.number().integer(),
    duration_type:          joi.string().valid('years', 'months', 'days'),
    endDate:                joi.boolean(),
    payment_amount:         joi.number(),
    payment_currency_code:  joi.string(),
    payment_period:         joi.string().valid('yearly', 'monthly', 'weekly', 'quarterly'),
    payment_timing:         joi.string().valid('begin', 'end'),
    payment_type:           joi.string().valid('full', 'partial'),
    status:                 joi.string().valid('draft', 'not-active', 'active', 'expired', 'terminated'),
    total:                  joi.number(),
}).unknown();

module.exports = { ContractSchema };