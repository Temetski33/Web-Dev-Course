import {addCat, findCatById, listAllCats, listCatsByUserId, modifyCat, removeCat} from '../models/cat-model.js';

const getCat = async (req, res) => {
  res.json(await listAllCats());
};

const getCatsByUserId = async (req, res) => {
  const cats = await listCatsByUserId(req.params.id);
  res.json(cats);
};

const getMyCats = async (req, res) => {
  const cats = await listCatsByUserId(res.locals.user.user_id);
  res.json(cats);
};

const getCatById = async (req, res) => {
  const cat = await findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = async (req, res, next) => {
  //console.log(req.body);
  //console.log(req.file);
  const newCat = req.body;
  //console.log(req.file.filename);
  if (!req.file) {
     const error = new Error('Invalid or missing file');
     error.status = 400;
     next(error);
   }
  // lisätään tiedostonimi, jotta addCat saa kaiken
  newCat.filename = req.file.filename;
  newCat.owner = req.body.owner;
  console.log('Owner being inserted:', newCat.owner);

  const result = await addCat(newCat);
   if (result.error) {
     return next(new Error(result.error));
   }
   res.status(201).json({message: 'New media item added.', ...result});
 };

const putCat = async (req, res) => {
  const catData = req.body;

  // If a new file is uploaded, update the filename
  if (req.file) {
    catData.filename = req.file.filename;
  }

  const result = await modifyCat(catData, req.params.id);
  if (result) {
    res.status(200).json({message: 'Cat item updated.', result});
  } else {
    res.sendStatus(404);
  }
};

const deleteCat = async (req, res) => {
  const result = await removeCat(req.params.id);
  if (result) {
    res.status(200).json({message: 'Cat item deleted.'});
  } else {
    res.sendStatus(404);
  }
};

export {getCat, getCatsByUserId, getMyCats, getCatById, postCat, putCat, deleteCat};
