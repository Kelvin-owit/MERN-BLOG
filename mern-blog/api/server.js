const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const app = express();

const salt = bycrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:BysONBiADybEw2cr@cluster0.bl8dael.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", function (req, res) {
  const { username, password } = req.body;

  try {
    const userDoc = User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(4000, function () {
  console.log("server started on port 4000 ");
});

//
