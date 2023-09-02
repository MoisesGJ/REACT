import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [image, setImage] = useState();

  const [people, setPeople] = useState([]);

  const mapTeam = {
    1: {
      count: 0,
    },
    2: {
      count: 0,
    },
    3: {
      count: 0,
    },
  };

  let errorAddTeam = false;

  const nameHandler = ({ target }) => {
    setName(target.value);
  };
  const imageHandler = ({ target }) => {
    setImage(target.value);
  };

  const addPerson = () => {
    setPeople([
      ...people,
      {
        id: people.length + 1,
        name,
        image: `https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 100
        )}.jpg`,
        team: null,
      },
    ]);
    setName('');
    setImage('');
  };

  const addTeam = ({ target }, key) => {
    const newpeople = people.map((person) => {
      person.id === key && (person.team = target.value);

      return person;
    });

    setPeople(newpeople);
  };

  const validateTeam = () => {
    let view;
    Object.keys(mapTeam).forEach((position) => {
      console.log(position, mapTeam[position]['count']);
      if (mapTeam[position]['count'] > 3) {
        view = 'd-block';
        mapTeam[position]['count'] = mapTeam[position]['count'] - 1;
      } else {
        view = 'd-none';
      }
    });

    return view;
  };

  return (
    <main className="border border-white border-3 rounded gap-3 container">
      <div className="row p-3 g-3">
        <div
          className={`${people.length === 0 && 'w-100'} col-12 col-lg-4 p-3`}
        >
          <form className="px-3">
            <div className="mb-3">
              <label forHtml="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                onChange={nameHandler}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label forHtml="name" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Your image"
                onChange={imageHandler}
                value={image}
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-lg btn-dark"
                type="button"
                onClick={addPerson}
              >
                Guardar
              </button>
            </div>
          </form>
          {people.length === 0 || (
            <>
              <h3 className="mt-5 fw-bold">Equipos:</h3>
              <div className="w-100 mt-3 d-flex justify-content-around">
                {Object.keys(mapTeam).map((teamNumber) => (
                  <div>
                    <h6 className="fw-bold">Equipo {teamNumber}</h6>
                    <ul className="p-0">
                      {people.map(({ team, name }) => {
                        if (team == teamNumber) {
                          const currCount = mapTeam[team]['count'];

                          mapTeam[team]['count'] = currCount + 1;

                          if (currCount < 3) {
                            return <li>{name}</li>;
                          }
                        }
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {setTimeout(
                () => (
                  <div className="alert alert-danger text-center" role="alert">
                    Ese equipo está lleno, seleccione otro.
                  </div>
                ),

                5000
              )}
            </>
          )}
        </div>
        <div className="col-12 col-lg-8 d-flex gap-3 flex-wrap justify-content-center">
          {people.map(({ id, name, image, team }) => (
            <div className="card">
              <div className="text-center">
                <img
                  src={image}
                  className="rounded-circle"
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{name}</h5>
                <code>{team ? `Equipo: ${team}` : 'Sin equipo'}</code>
                <div className="mt-3">
                  <button
                    className={`btn btn-sm btn-dark ${
                      team == 1 && 'btn-click'
                    }`}
                    onClick={(event) => addTeam(event, id)}
                    value="1"
                  >
                    Equipo 1
                  </button>
                  <button
                    className={`btn btn-sm btn-dark mx-1 ${
                      team == 2 && 'btn-click'
                    }`}
                    onClick={(event) => addTeam(event, id)}
                    value="2"
                  >
                    Equipo 2
                  </button>
                  <button
                    className={`btn btn-sm btn-dark ${
                      team == 3 && 'btn-click'
                    }`}
                    onClick={(event) => addTeam(event, id)}
                    value="3"
                  >
                    Equipo 3
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
