// este archivo es el punto de entrada principal de la app
// importa funciones desde: fetchProducts, render, productmodal, cartsidebar, cartmanager y localstoragehandler
// se encarga de iniciar todo cuando carga la pagina:
// - ejecuta fetchProducts para obtener los productos
// - llama a renderProducts para mostrarlos en el dom
// - escucha eventos globales:
//   - busqueda de productos desde el input
//   - apertura y cierre del carrito
//   - clic en los botones ver mas para abrir el modal
// - coordina el uso del carrito: agrega productos, actualiza cantidades, guarda en localstorage y actualiza el sidebar
import showProductModal from "./components/ProductModal.js";

let product = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  rating: {
    rate: 4.7,
    count: 500,
  },
  cantidad: 3,
};

showProductModal(product);
