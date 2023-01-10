const Users = require("../../models/users");

exports.getAllUsers = async (req, res) => {
  const resp = await Users.find({});
  res.send(resp);
};

exports.getSearchedUsers = async (req, res) => {
  let data;
  const search = req.query.search;
  data = await Users.find({ $text: { $search: `${search}` } });

  if (!data.length) {
    data = await Users.find({
      name: { $regex: new RegExp(`^${search}`, "i") },
    });
  }
  if (!data.length) {
    data = await Users.find({ name: { $regex: new RegExp(search, "i") } });
  }

  res.send(data);
};
