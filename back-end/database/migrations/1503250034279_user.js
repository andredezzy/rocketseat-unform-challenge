"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {});
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
