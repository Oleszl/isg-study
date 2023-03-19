import axios from "axios";

export default class UserService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get("http://localhost:3001/users", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async saveUser(user) {
    const response = await axios.post("http://localhost:3001/users", user);
    return response;
  }

  static async deleteUser(userId) {
    const response = await axios.delete(
      `http://localhost:3001/users/${userId}`
    );
    return response;
  }
}
