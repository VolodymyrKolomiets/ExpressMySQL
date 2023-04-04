const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();


router.post('/insertProduct', PostController.insertProduct);

router.get('/wiewAllProducts', PostController.wiewAllProducts);

router.get('/wiewProductById/id/:id', PostController.wiewProductById);

router.get('/wiewAllProductsDes', PostController.wiewAllProductsDes);

///////////////////////////NO FUNCIONA//////////////////////////
router.get('/wiewProductByName/:producto', PostController.wiewProductByName);
/////////////////////////////////////////////////////////////

router.delete('/deleteProductById/id/:id', PostController.deleteProductById);

module.exports = router;