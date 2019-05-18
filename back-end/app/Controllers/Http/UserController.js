"use strict";

const User = use("App/Models/User");

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET user
   */
  async index() {
    const users = await User.query().fetch();

    return users;
  }

  /**
   * Create/save a new user.
   * POST user
   */
  async store({ request }) {
    const data = request.only(["name", "contact"]);
    const user = await User.create(data);

    return user;
  }

  /**
   * Display a single user.
   * GET user/:id
   */
  async show({ params }) {
    const user = await User.find(params.id);

    return user;
  }

  /**
   * Update user details.
   * PUT or PATCH user/:id
   */
  async update({ params, request }) {
    const data = request.only(["name", "contact"]);
    const user = await User.find(params.id);

    user.merge(data);
    await user.save();

    return user;
  }

  /**
   * Delete a user with id.
   * DELETE user/:id
   */
  async destroy({ params, response }) {
    const user = await User.find(params.id);

    user.delete();

    return "successfully deleted";
  }
}

module.exports = UserController;
