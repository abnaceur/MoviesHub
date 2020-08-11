const comment = [
  {
    id: "1",
    text: "j'aime ce film",
    date: "01/07/2010",
    username: "sakala",
  },
  {
    id: "2",
    text: "j'aime ce filmeee",
    date: "01/07/2010",
    username: "sakala",
  },
];

const postCommentOnMovie = (callBack) => {
  console.log("OK");
  return callBack(null, null);
};

const getCommentsById = (callBack) => {
  return callBack(null, comment);
};

const deleteComment = (callBack) => {
  result = { Comment: "OKOKOK" };
  return callBack(err, result);
};

exports.postCommentOnMovie = postCommentOnMovie;
exports.getCommentsById = getCommentsById;
exports.deleteComment = deleteComment;
