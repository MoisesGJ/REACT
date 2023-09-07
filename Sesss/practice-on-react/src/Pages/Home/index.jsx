import { Outlet, Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="container-fluid p-5">
      <section className="row">
        <div className="col-4 mt-3 border-end border-5">
          <ul className="list-group">
            <li className="list-group-item fs-1">
              <Link
                to="usuarios"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                Usuarios
              </Link>
            </li>
            <li className="list-group-item fs-1">
              <Link
                to="products"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                Productos
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
