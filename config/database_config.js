const { Sequelize , DataTypes} = require("sequelize");

const otpModel = require("../src/models/otp_models");

const vendorModel = require("../src/models/vendor_model");

const catagoryModel = require("../src/models/catagory_model");

const vendorCatagoryModel = require("../src/models/vendorCatagory_model");


const instanceSequelize = new Sequelize ("xdeals", "root", "Khaja05$", {
    host: "localhost",
    dialect: "mysql"
});



models = {
otp_model : otpModel(instanceSequelize ,DataTypes),
vendor_model : vendorModel(instanceSequelize, DataTypes),
catagory_model : catagoryModel(instanceSequelize, DataTypes),
vendorCatagory_model : vendorCatagoryModel(instanceSequelize,DataTypes)
};

models.vendor_model.hasMany(models.vendorCatagory_model);
models.vendorCatagory_model.belongsTo(models.vendor_model);

models.catagory_model.hasMany(models.vendorCatagory_model);
models.vendorCatagory_model.belongsTo(models.catagory_model);




module.exports = {instanceSequelize, models};