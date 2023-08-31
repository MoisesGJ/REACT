import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [product, setProduct] = useState({});

  const productHandler = ({ target }) => {
    setProduct({ ...product, [target.name]: target.value });
  };

  return (
    <main className="border border-white border-3 rounded d-flex p-5 gap-3">
      <form className="border border-white border-3 rounded d-flex flex-column justify-content-around p-3">
        <label htmlFor="name" className="d-flex flex-column fw-bold text-white">
          Nombre
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => productHandler(event)}
          />
        </label>
        <label
          htmlFor="descrition"
          className="d-flex flex-column fw-bold text-white"
        >
          Descripción
          <input
            type="text"
            id="description"
            name="description"
            onChange={(event) => productHandler(event)}
          />
        </label>
        <label
          htmlFor="price"
          className="d-flex flex-column fw-bold text-white"
        >
          Precio
          <input
            type="text"
            id="price"
            name="price"
            onChange={(event) => productHandler(event)}
          />
        </label>
        <label
          htmlFor="image"
          className="d-flex flex-column fw-bold text-white"
        >
          Imagen
          <input
            type="text"
            id="image"
            name="image"
            onChange={(event) => productHandler(event)}
          />
        </label>
      </form>
      <div className="border border-white border-3 rounded d-flex flex-column p-5">
        <img
          src={product.image}
          className="w-75 img-thumbnail mx-auto mb-5"
          style={{ maxWidth: '300px' }}
        />
        <h5 className="fw-bold text-white" name>
          {product.name}
        </h5>
        <h5 className="fw-bold text-white">{product.description}</h5>
        <h5 className="fw-bold text-white">{product.price}</h5>
      </div>
    </main>
  );
}

export default App;
