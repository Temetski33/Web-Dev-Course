const userItems = [
  {
    user_id: 1,
    name: "Hemuli",
    birthdate: '2019-03-08',
    weight: 7,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat",
}
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((item) => item.user_id == id);
};

const addUser = (user) => {
  const {user_name, weight, owner, filename, birthdate} = user;
  const newId = userItems[0].user_id + 1;
  userItems.unshift({user_id: newId, user_name, weight, owner, filename, birthdate});
  return {user_id: newId};
};

export {listAllUsers, findUserById, addUser};
