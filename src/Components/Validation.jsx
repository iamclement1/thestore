const Joi = require('joi');

const registerValidations = data => {
    const schema = Joi.object ({
        username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        email: Joi.string().pattern(new RegExp('')).required(),
        password: Joi.string()
    }).unknown();

    return schema.validate(data);
};

module.exports.registerValidations = registerValidations;