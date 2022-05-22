module.exports = function (app) {
  var abc = require("../Controller/controller");
  app.route("/signup").post(abc.signup);
  app.route("/signin").post(abc.signin);
  app.route("/user").post(abc.users);
};
