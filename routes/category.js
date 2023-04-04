const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router.post('/insertCategories', PostController.insertCategories);

router.post('/insertCategoriesOfProducts', PostController.insertCategoriesOfProducts);

////////////////HAY UNA MANERA DE SACAR LOS NOMBRES Y CATEGORIAS QUE NO SEA A TRAVES DE UNA TABLA INTERMEDIA????////////////////
router.get('/wiewAllCategoriesAndProducts', PostController.wiewAllCategoriesAndProducts);

router.get('/wiewAllCategories', PostController.wiewAllCategories);

router.get('/wiewCategoriesById/id/:id', PostController.wiewCategoriesById);

module.exports = router;