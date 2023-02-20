const payloadValidator = (err, req, res, next) => {
  const {title, author, url, likes} = req.body;

  console.log(title, author, url, likes);

  if (title && author && url && likes){
    next();
  }
  else{
    res.status(400).send({error: "unvalid payload"});
  }
}
module.exports = payloadValidator;
