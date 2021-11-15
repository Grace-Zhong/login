module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "user" && req.body.password === "user") {
      return res.status(200).json(req.body);
    } else {
      return res.status(400).json({ message: "Incorrect username or password" });
    }
  }
  next();
};