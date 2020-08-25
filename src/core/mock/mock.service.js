import Vue from "vue";

var MockAdapter = require("axios-mock-adapter");

// mock testing user accounts
const users = [
  {
    name: 'IPC User',
    username: "ipc",
    password: "ipc",
    token: "mgfi5juf74j",
    userType: "ipc"
  },
  {
    name: 'Dealer User',
    username: "dealer",
    password: "dealer",
    token: "fgj8fjdfk43",
    userType: "dealer"
  },
  {
    name: 'Customer User',
    username: "customer",
    password: "customer",
    token: "fgj8fjdfk45",
    userType: "customer"
  }
];

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios);

    // mock login request
    mock.onPost("/login").reply(data => {
      const credential = JSON.parse(data.data);
      const found = users.find(user => {
        return (
          credential.username === user.username &&
          credential.password === user.password
        );
      });
      if (found) {
        return [200, found];
      }
      return [404, { errors: ["The login detail is incorrect"] }];
    });

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply(data => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find(user => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });
  }
};

export default MockService;
