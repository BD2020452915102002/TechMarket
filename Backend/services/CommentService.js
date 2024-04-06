const Comment = require("../models/comment");

exports.createComment = async (comment) => {
  return await Comment.create(comment);
};

exports.getAllComments = async () => {
  return await Comment.find();
};

exports.getCommentById = async (id) => {
  return await Comment.findById(id);
};

exports.updateComment = async (id, comment) => {
  return await Comment.findByIdAndUpdate(id, comment);
};

exports.deleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};
