import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [users, setUsers] = useState({});
  const [update, setUpdate] = useState(false);
  const [isLogged, setIsLogged] = useState();

  const [data, setData] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        'https://javascript27g-default-rtdb.firebaseio.com/equipo1/.json'
      );
      const data = await response.json();
      console.log(data);

      setUsers(data);
    };
    getUsers();
  }, [update]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [update]);

  const dataHandler = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
    console.log(data);
  };

  const logIn = async () => {
    const r = await fetch(
      'https://javascript27g-default-rtdb.firebaseio.com/equipo1/.json',
      { method: 'POST', body: JSON.stringify(data) }
    );
    const response = await r.json();

    localStorage.setItem('token', response.name);

    setUpdate(!update);
    setIsLogged(true);
  };

  const addFriend = async (key) => {
    const token = localStorage.getItem('token');

    const dataFriend = {
      id: token,
      friends: [],
    };

    const r = await fetch(
      'https://javascript27g-default-rtdb.firebaseio.com/equipo1/friends/.json',
      { method: 'POST', body: JSON.stringify(data) }
    );
    const response = await r.json();
  };

  return (
    <main>
      {isLogged || (
        <div>
          <h1 className="fw-bold my-3 text-center">Log In</h1>
          <form>
            <div className="mb-3">
              <label for="name-user" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name-user"
                name="name"
                onChange={dataHandler}
              />
            </div>
            <div className="mb-3">
              <label for="correo-user" className="form-label">
                Correo
              </label>
              <input
                type="text"
                className="form-control"
                id="correo-user"
                name="email"
                onChange={dataHandler}
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-dark btn-lg"
                type="button"
                onClick={logIn}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
      {isLogged && (
        <div className="container-fluid p-5">
          <section className="row">
            <div className="col-6">
              <h3 className="fw-bold my-3 text-center">Usuarios disponibles</h3>
              {Object.keys(users).map((key) => {
                return (
                  <>
                    <div className="card mt-3 p-2" key={key}>
                      <div className="card-body">
                        <h5 className="card-title">
                          Me llamo <b>{users[key].name}</b>
                        </h5>
                        <p>
                          Mi <b>correo</b> es <u>{users[key].email}</u>
                        </p>
                        <div className="text-end">
                          <button
                            className="btn btn-sm btn-dark"
                            onClick={() => addFriend(key)}
                          >
                            Añadir amigx
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="col-6">
              <h3 className="fw-bold my-3 text-center">Mis amigos</h3>
              {/* {Object.keys(users).map((key) => {
                return (
                  <>
                    <div className="card mb-3" key={key}>
                      <div className="card-body">
                        <h5 className="card-title">
                          Soy: <b>{users[key].name}</b>
                        </h5>
                        <p>
                          MI correo es <u>{users[key].email}</u>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })} */}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
