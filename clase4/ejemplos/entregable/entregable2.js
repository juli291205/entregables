class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.generateId(); // Generar un ID único
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Producto no se encuentra');
        }
        return product;
    }

    updateProduct(id, updatedFields) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }
        this.products[index] = { ...this.products[index], ...updatedFields };
        return this.products[index];
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }
        this.products.splice(index, 1);
    }

    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9); // Generar un ID único aleatorio
    }
}

// Ejemplo de uso:
const manager = new ProductManager();

console.log(manager.getProducts()); // []

const newProduct = manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "abc123",
    25
);
console.log(newProduct); // Muestra el producto agregado

console.log(manager.getProducts()); // Muestra el producto agregado en la lista de productos

const foundProduct = manager.getProductById(newProduct.id);
console.log(foundProduct); // Muestra el producto encontrado por ID

const updatedProduct = manager.updateProduct(newProduct.id, { price: 300 });
console.log(updatedProduct); // Muestra el producto actualizado

manager.deleteProduct(newProduct.id); // Elimina el producto

console.log(manager.getProducts()); // Muestra la lista de productos después de eliminar