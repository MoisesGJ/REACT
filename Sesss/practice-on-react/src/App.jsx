import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDoText, setToDoText] = useState(
    <b className="text-white">No tienes pendientes :C</b>
  );
  const [toDoPriority, setToDoPriority] = useState('media');
  const [toDoes, setToDoes] = useState([]);

  const toDoTextHandler = ({ target }) => {
    setToDoText(target.value);
  };

  const toDoPriorityHandler = ({ target }) => {
    setToDoPriority(target.value);
  };

  const addList = () => {
    const itemText = toDoText;
    const itemPrioity = toDoPriority;

    const objToDo = {
      id: toDoes.length,
      text: itemText,
      priority: itemPrioity,
      isChecked: false,
    };

    itemText.length > 0 && setToDoes([...toDoes, objToDo]);
    setToDoText('');
  };

  const toDoCheckbox = ({ target }) => {
    const idCurr = target.name;

    toDoes[idCurr].isChecked = !toDoes[idCurr].isChecked;

    setToDoes([...toDoes]);
  };

  return (
    <main className="border border-white border-3 rounded gap-3 container">
      <div className="row p-3">
        <div className="col-12 col-md-6">
          <h3 className="fw-bold">Lista de pendientes:</h3>
          <hr className="border-white border-2" />
          <ul className="p-0">
            {toDoes.map(({ text, priority, id, isChecked }) => {
              return (
                <li className="list-group-item">
                  <label
                    htmlFor={`todo-${id}`}
                    className={`fw-bold ${priority} ${
                      isChecked ? 'text-decoration-line-through fst-italic' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={id}
                      id={`todo-${id}`}
                      onChange={toDoCheckbox}
                      className="me-2"
                    />
                    {text}
                  </label>
                </li>
              );
            })}
            <li className="list-group-item">
              <label htmlFor="curr" className={`fw-bold h4 ${toDoPriority}`}>
                {toDoText}
              </label>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="fw-bold">Nuevo pendiente:</h3>
          <hr className="border-2 border-white" />
          <input
            type="text"
            onChange={toDoTextHandler}
            className="w-100 px-2"
            value={typeof toDoText === 'object' ? '' : toDoText}
            placeholder="Ingresa el pendiente..."
          />
          <h4 className="mt-3 fw-bold">Prioridad</h4>
          <div className="d-flex flex-column align-items-start gap-2">
            <label htmlFor="baja" className="fw-bold baja h5">
              <input
                type="radio"
                name="priority"
                id="baja"
                value="baja"
                className="me-2"
                onChange={toDoPriorityHandler}
              />
              Baja
            </label>
            <label htmlFor="media" className="fw-bold media h5">
              <input
                type="radio"
                name="priority"
                id="media"
                value="media"
                className="me-2"
                onChange={toDoPriorityHandler}
                defaultChecked
              />
              Media
            </label>
            <label htmlFor="importante" className="fw-bold importante h5">
              <input
                type="radio"
                name="priority"
                id="importante"
                value="importante"
                className="me-2"
                onChange={toDoPriorityHandler}
              />
              ¡Para ayer!
            </label>
          </div>
          <div className="text-center text-md-end">
            <button
              className="mt-3 btn btn-dark w-50 fw-bold"
              onClick={addList}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
