const notFound = (req,res)=>{
    return res.status(404).json({message:"Invalid Route"});
}

module.exports = notFound