const db = require("../config/database.js");

const PostController = {
    insertProduct(req, res) {
        let sql = `INSERT INTO products (producto, precio) 
        values ('${req.body.producto}', '${req.body.precio}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Product added...");
        });
    },

    insertCategories(req, res) {
        let post = { categoria: req.body.categoria };
        let sql = 'INSERT INTO categories SET ?';
        db.query(sql, post, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Categorie added...");
        });
    },

    insertCategoriesOfProducts(req, res) {
        let post = { category_id: req.body.category_id, product_id: req.body.product_id };
        let sql = 'INSERT INTO categoriesOfProduct SET ?';
        db.query(sql, post, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Categorie of products added...");
        });
    },

    wiewAllProducts(req, res) {
        let sql = "SELECT * FROM products";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewAllCategories(req, res) {
        let sql = "SELECT * FROM categories";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewAllCategoriesAndProducts(req, res) {
        let sql = "SELECT * FROM categoriesOfProduct";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewProductById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewAllProductsDes(req, res) {
        let sql = "SELECT * FROM products ORDER BY id DESC";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewCategoriesById(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    wiewProductByName(req, res) {
        let sql = `SELECT * FROM products WHERE producto = ${req.params.producto}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },

    deleteProductById(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }

};

module.exports = PostController;
