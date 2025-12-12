import bcrypt from 'bcrypt';
import {addUser, findUserById, listAllUsers, updateUser, deleteUser as deleteUserModel} from '../models/user-model.js';

const getUser = async (req, res) => {
  res.json(await listAllUsers());
};

const getUserById = async (req, res) => {
  const result = await findUserById(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const postUser = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const result = await addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putUser = async (req, res) => {
  // Only hash if password is provided
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  const result = await updateUser(req.params.id, req.body);
  if (result) {
    res.status(200).json({message: 'User item updated.', result});
  } else {
    res.sendStatus(404);
  }
};

const deleteUser = async (req, res) => {
  const ok = await deleteUserModel(req.params.id);
  if (ok) {
    res.status(200).json({message: 'User item deleted.'});
  } else {
    res.sendStatus(404);
  }
};

export {getUser, getUserById, postUser, putUser, deleteUser};
