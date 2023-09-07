export default function AllListProducts({ AllProducts }) {
  return (
    <>
      <h2 className="text-center">Lista de productos</h2>
      <ul className="list-group">
        {AllProducts.map((product) => {
          const { image, title, price } = product;

          return (
            <li className="list-group-item d-flex justify-content-start align-items-center gap-5">
              <div className="w-25">
                <img src={image} className="rounded-circle img-fluid" />
              </div>
              <p className="fw-bold">{`${title} $ ${price}`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
