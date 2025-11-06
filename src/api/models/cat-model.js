const catItems = [
  {
    cat_id: 3,
    cat_name: "Hemuli",
    birthdate: '2019-03-08',
    weight: 7,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat",
},
{
    cat_id: 1,
    cat_name: "Nipsu",
    birthdate: '2007-04-08',
    weight: 5,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat3",
},
{
    cat_id: 2,
    cat_name: "Myy",
    birthdate: '2025-04-02',
    weight: 2,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat4",
},
{
    cat_id: 4,
    cat_name: "Peikko",
    birthdate: '2004-02-08',
    weight: 32,
    owner: "Muumilaakso",
    image: "https://loremflickr.com/320/240/cat2",
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
