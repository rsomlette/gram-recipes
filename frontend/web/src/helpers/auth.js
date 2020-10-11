import localForage from "localforage";

localForage.config({
  name: "Yummit",
  version: 0.1,
  description: "Local database for increased performance",
});

class UserSession {
  async saveUser(user) {
    try {
      await localForage.setItem("user", user);
    } catch (err) {
      throw err;
    }
  }

  async getUser() {
    try {
      return await localForage.getItem("user");
    } catch (err) {
      throw err;
    }
  }

  async deleteUser() {
    try {
      await localForage.removeItem("user");
    } catch (err) {
      throw err;
    }
  }
}

export const userSession = new UserSession();
