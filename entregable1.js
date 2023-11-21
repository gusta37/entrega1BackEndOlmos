// 1. Primero, se define la clase  ProductManager responsable de administrar los productos. Su propiedad  'products'  almacena los productos. Contiene un constructor que inicializa esta propiedad como un array vacío. 

class ProductManager {
    products;
    constructor() {
      this.products = [];
    }
    // 2. Propiedad estática  'correlativoId'  que inicia en 0 y que se utiliza para asignar un ID único automáticamente a cada producto agregado. 
    static correlativoId = 0;
    // 3. El método  addProduct agrega un nuevo producto a la lista. Toma como argumentos el título, la descripción, el precio, la imagen, el código y el stock del producto. Si alguno de estos campos está vacío, se lanza un error. 
    addProduct(title, description, price, thumbnail, code, stock) {
      if (
        !title ||
        !description ||
        !price ||
        !thumbnail ||
        !code ||
        !stock
      ) {
        throw new Error("Todos los campos son obligatorios");
      }
      // 4. Se verifica si el código del producto ya existe en la lista de productos. Si es así, se lanza un error. De lo contrario, se incrementa el valor de  'correlativoId'. Luego se crea un 'objeto'  newProduct  con los datos proporcionados y se agrega a la lista de productos.
      let codeExists = this.products.some((dato) => dato.code === code);
      if (codeExists) {
        throw new Error("El código ya existe, por favor verifique");
      } else {
        ProductManager.correlativoId++;
        const newProduct = {
          id: ProductManager.correlativoId,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.products.push(newProduct);
      }
    }
    // 5. El método  getProducts devuelve la lista de productos. 
    getProducts() {
      return this.products;
    }
    // 6. El método  getProductById  se utiliza para obtener un producto específico según su ID. Busca en la lista de productos el primer producto que tenga el ID proporcionado. Si lo encuentra, lo devuelve. De lo contrario, lanza un error. 
    getProductById(id) {
      let product = this.products.find((dato) => dato.id === id);
      if (product !== undefined) {
        return product;
      } else {
        throw new Error("Producto no encontrado");
      }
    }
  }
  // 7. Instancia de  ProductManager
  const myProductManager = new ProductManager();
  // 8. Pruebo agregar dos productos utilizando el método  addProduct  de  myProductManager .
  try {
    myProductManager.addProduct(
      "Piano Princesas",//title
      "Piano Musical Princesas Alfonbra De Juguete Con Microfono Zippy",//description
      29946,//price
      "https://http2.mlstatic.com/D_NQ_NP_2X_859443-MLA72061570897_102023-F.webp",//thumbnail
      "girls1234",//code
      15//stock
    );
    myProductManager.addProduct(
      "Robot Musical",//title
      "Robot Musical Luz Sonido Y Movimiento Lanza Flechas",//description
      17850,//price
      "https://http2.mlstatic.com/D_NQ_NP_2X_724198-MLU72605082855_102023-F.webp",//thumbnail
      "boys1234",//code
      25//stock
    );

    // 9. Imprime en la consola la lista de productos utilizando el método  getProducts  de  myProductManager. 
    console.log("Todos los Productos:", myProductManager.getProducts());

    // 10. Intento obtener un producto específico por su ID utilizando el método  'getProductById'  de  'myProductManager' . Si el id del producto se encuentra, se imprime en la consola y si no, se imprime un error.
    const product = myProductManager.getProductById(2);
    console.log("Productos filtrado por ID:", product);
  } catch (error) {
    console.log(error.message);
  }