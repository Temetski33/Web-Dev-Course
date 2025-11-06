const catItems = [
  {
    cat_id: 1,
    name: "Hemuli",
    birthdate: '2019-03-08',
    weight: 7,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat",
},
{
    cat_id: 2,
    name: "Nipsu",
    birthdate: '20007-04-08',
    weight: 5,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat3",
}
];

const listAllCats = () => {
  return catItems;
};

const findCatById = (id) => {
  return catItems.find((item) => item.cat_id == id);
};

const addCat = (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  const newId = catItems[0].cat_id + 1;
  catItems.unshift({cat_id: newId, cat_name, weight, owner, filename, birthdate});
  return {cat_id: newId};
};

export {listAllCats, findCatById, addCat};
