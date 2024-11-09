const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const {username,password} = req.body;
  if(!username || !password){
    return res.status(401).json({message:"Enter Credientials"});
  }

  //dummy id as db is not connected
  const id = new Date().getDate();

  //keep payload less for fast access 
  
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
  console.log(username,password); 
  res.status(200).json({message:"User Created",token});
};

const dashboard = (req, res) => {
    const LuckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({message:"Welcome Hiten",secret:`Your secret number ${LuckyNumber}`})
};

module.exports = {login,dashboard}