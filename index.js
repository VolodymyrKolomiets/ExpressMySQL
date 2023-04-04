const express = require("express");
const app = express();
const PORT = 8080;
const db = require('./config/database');

app.use(express.json());
app.use('/products', require('./routes/products')); /////PRIMER PRODUCTS NOMBRE DE RUTA DESPUES DE LOCALHOSTE
app.use('/category', require('./routes/category'));


app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE mySqlExpressDB';
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Database created...')
  })
});

app.get('/createtableProducts', (req, res) => {
  let sql = "CREATE TABLE products(id int AUTO_INCREMENT,producto VARCHAR(255), precio INT, PRIMARY KEY(id))"
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Posts table created...')
  })
});

app.get('/createtableCategories', (req, res) => {
  let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT,categoria VARCHAR(50), PRIMARY KEY(id))'
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Posts table created...')
  })
});



app.get('/createtableCategoriesOfProducts', (req, res) => {
  let sql = 'CREATE TABLE categoriesOfProduct(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE,FOREIGN KEY(category_id) REFERENCES categories(id))'
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Posts table created...')
  })
});

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));