const validatorTalker = (req, res, next) => {
  const { talk } = req.body;

  if ((!talk || !talk.watchedAt) || (Number.isNaN(+talk.rate))) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  return next();
};

module.exports = validatorTalker;
