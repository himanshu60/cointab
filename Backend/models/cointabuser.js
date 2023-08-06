const { sequelize } = require("../config/db");
const Sequelize = require("sequelize");

const xrandomUsers = sequelize.define(
  "xrandomUsers",
  {
    gender: Sequelize.STRING,
    title: Sequelize.STRING(1500),
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    street_number: Sequelize.INTEGER,
    street_name: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    postcode: Sequelize.STRING,
    latitude: Sequelize.DECIMAL(10, 6),
    longitude: Sequelize.DECIMAL(10, 6),
    timezone_offset: Sequelize.STRING,
    timezone_description: Sequelize.STRING,
    email: Sequelize.STRING,
    uuid: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    salt: Sequelize.STRING,
    md5: Sequelize.STRING,
    sha1: Sequelize.STRING,
    sha256: Sequelize.STRING,
    dob_date: Sequelize.DATE,
    dob_age: Sequelize.INTEGER,
    registered_date: Sequelize.DATE,
    registered_age: Sequelize.INTEGER,
    phone: Sequelize.STRING,
    cell: Sequelize.STRING,
    id_name: Sequelize.STRING,
    id_value: Sequelize.STRING,
    picture_large: Sequelize.STRING,
    picture_medium: Sequelize.STRING,
    picture_thumbnail: Sequelize.STRING,
    nat: Sequelize.STRING,
  },
  {
    timestamps: false, // Disable timestamps
  }
);

module.exports = { xrandomUsers };
