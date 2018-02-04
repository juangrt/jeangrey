import axios from "axios";


class Session {

  login(user) {
    return axios.post('/api/v1/login', user);
  }
}

module.exports = Session;