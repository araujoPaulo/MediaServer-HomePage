exports.getHome = function(req, res, next) {
  res.render("home", { title: "Movie Server HomePage" });
};
