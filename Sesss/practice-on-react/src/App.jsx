import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import moment from 'moment';

function App() {
  const [people, setPerson] = useState([]);

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [avatar, setAvatar] = useState();

  const addPerson = () => {
    const person = {
      key: people.length + 1,
      name,
      avatar,
      age: moment().diff(date, 'years'),
    };

    setPerson([...people, person]);
  };

  return (
    <main className="border border-white border-3 rounded gap-3 container">
      <div className="row p-3 g-3">
        <div className="col-12 col-lg-5 p-3">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                onChange={(event) => setDate(event.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="avatar" className="form-label">
                Imagen
              </label>
              <input
                type="avatar"
                onChange={(event) => setAvatar(event.target.value)}
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={addPerson}
                className="btn btn-dark btn-lg"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-7 d-flex gap-3 flex-wrap justify-content-center">
          {people.map(({ name, age, avatar, key }) => {
            return (
              <div className="card flex-row" key={key}>
                <img
                  src={avatar}
                  className="card-img-top rounded-circle"
                  style={{ width: '150px' }}
                />
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title fw-bold">{name}</h5>
                  <p className="card-text ">Tengo {age} años</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
