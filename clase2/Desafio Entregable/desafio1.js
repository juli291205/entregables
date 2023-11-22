class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.generateUniqueId();
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        const isCodeRepeated = this.products.some(product => product.code === code);
        if (isCodeRepeated) {
            throw new Error('El código del producto está repetido');
        }

        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Uso de la clase ProductManager:
const manager = new ProductManager();
console.log(manager.getProducts()); // []

const newProduct = manager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'abc123',
    25
);
console.log(newProduct); // Debería mostrar el producto agregado con su id

console.log(manager.getProducts()); // Mostrará el producto recién agregado en la lista

