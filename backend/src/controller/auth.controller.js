
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../service/user.service.js");

const createToken = (id,role) => {
  return jwt.sign({ id ,role}, process.env.JWT_SECRET);
};

const register = async (req, res) => {
  try {
    const {email,confirmPassword,password } = req.body;
    const existEmail =await findUserByEmail(email) 

    if(existEmail){
      return res.status(400).json({ success: false, message:"Người dùng đã thoát" })
    }

    if (confirmPassword !== password) {
      return res.status(400).json({ success: false, message:"error password" })
    }

    const user =await createUser(req.body)

    const token = createToken(user._id,user.role);

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existEmail =await findUserByEmail(email) 

    if (!existEmail) {
      return res.status(400).json({ success: false, message: "Người dùng chưa thoát" });
    }

    const isMatch = await bcrypt.compare(password, existEmail.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Sai thông tin" });
    }

    const token = createToken(existEmail._id,existEmail.role);
  
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = { register, login };
