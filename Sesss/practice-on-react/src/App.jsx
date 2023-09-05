import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [songs, setSongs] = useState({});
  const [update, setUpdate] = useState(false);

  const [songdata, setSongdata] = useState({});

  const updateSongs = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    fetch('https://javascript27g-default-rtdb.firebaseio.com/playlist/.json')
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, [update]);

  const inputHandler = ({ target }) => {
    setSongdata({ ...songdata, [target.name]: target.value });
  };

  const saveSong = async () => {
    const res = await fetch(
      'https://javascript27g-default-rtdb.firebaseio.com/playlist/.json',
      { method: 'POST', body: JSON.stringify(songdata) }
    );
    const data = await res.json();

    updateSongs();

    setSongs(data);
  };

  const deleteSong = async (key) => {
    const res = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/playlist/${key}.json`,
      { method: 'DELETE' }
    );
    const data = await res.json();

    updateSongs();

    setSongs(data);
  };

  return (
    <>
      <h1>Songs lists</h1>
      <div className="my-2 text-end">
        <button className="btn btn-sm btn-info" onClick={updateSongs}>
          Actualizar
        </button>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="song-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="song-name"
            name="name"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="song-author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="song-author"
            name="artist"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <div className="text-center">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={saveSong}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
      <ul>
        {songs &&
          Object.keys(songs).map((key) => {
            return (
              <li key={key} className=" mt-3 d-flex justify-content-between">
                <div className="">
                  <b>{songs[key].name}</b> de {songs[key].artist}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSong(key)}
                >
                  Borrar
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
