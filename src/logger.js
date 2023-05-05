const logger=(req,res,next)=>{
    const {url,method}=req
    console.log(method,url);
    next()
}

module.exports=logger