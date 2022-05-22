const user = require("../Model/user");
const jwt = require('jsonwebtoken');


exports.users = async (req, res) => {
  const data = await user.find();
  res.json(data);
};

exports.signup = async (req, res) => {

  const { name, username, email, password, confirmpassword } = req.body;
  try {
    let create = await user.findOne({ email: email });
    if (create) {
      return res.status(400).send("That user already exisits!");
    } else {
      const newUser = await user.create({
        name,
        username,
        email,
        password,
        confirmpassword,
      });
      newUser.save();
      res.send("User Created");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.signin = async (req, res) => {

  const { username, password } = req.body;
  let user = await user.findOne({ username: username, password: password });
  if (!user) {
    res.status(400).send('Invalid user');
  }
  else {
    const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    res.send(token);
  }

};


