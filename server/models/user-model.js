let result = {
  username: "Sakala",
  email: "melchiorbengtsson@gmail.com",
  firstname: "Melchior",
  lastname: "Bengtsson",
};

const newUser = (callBack) => {
  console.log("User Created");
  return callBack(null, null);
};

const verifyUser = (callBack) => {
  console.log("User Login");
  return callBack(null, comment);
};

const updateUser = (username, email, firstname, lastname, callBack) => {
  console.log("User Update");
  console.log(username);
  return callBack(err, result);
};

const updatePass = (oldpass, newpass, repeatpass, callBack) => {
  console.log("Password Updated");
  console.log(oldpass);
  return callBack(err, result);
};

const profile = (callBack) => {
  console.log("Send Profile");

  return callBack(null, result);
};
exports.newUser = newUser;
exports.verifyUser = verifyUser;
exports.updateUser = updateUser;
exports.updatePass = updatePass;
exports.profile = profile;
