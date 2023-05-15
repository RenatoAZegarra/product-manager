const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products',ProductController.readAll);
    app.get('/api/products/:id',ProductController.readOne);
    app.post('/api/products',ProductController.create);
    app.patch('/api/products/:id',ProductController.update);
    app.delete('/api/products/:id',ProductController.delete);

}