const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHead = req.headers.authorization;

  if (!authHead || !authHead.startsWith("Bearer")) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const token = authHead.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const {id,username} = decode;
    req.user = {id,username}
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authMiddleware;
