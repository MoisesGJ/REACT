import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDoText, setToDoText] = useState('');
  const [toDoPriority, setToDoPriority] = useState();
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

    const objToDo = { text: itemText, priority: itemPrioity, isChecked: false };

    const currToDoID = toDoes.length > 0 ? toDoes[toDoes.length - 1].id + 1 : 1;

    objToDo['id'] = currToDoID;

    setToDoes([...toDoes, objToDo]);
  };

  const toDoCheckbox = ({ target }) => {
    const idCurr = target.name - 1;

    toDoes[idCurr].isChecked = !toDoes[idCurr].isChecked;

    setToDoes([...toDoes]);
  };

  return (
    <main className="border border-white border-3 rounded gap-3 container">
      <div className="row p-3">
        <div className="col-12 col-md-6">
          <h3 className="fw-bold">Lista de pendientes:</h3>
          <ul>
            {toDoes.map(({ text, priority, id, isChecked }) => {
              const classLabel = isChecked
                ? ' text-decoration-line-through'
                : '';

              return (
                <li className="list-group-item">
                  <label htmlFor="" className={priority + classLabel}>
                    {text.length > 20 ? `${text.slice(0, 20)}...` : text}
                    <input
                      type="checkbox"
                      name={id}
                      onChange={toDoCheckbox}
                      className="ms-2"
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="fw-bold">Nuevo pendiente:</h3>
          <input type="text" onChange={toDoTextHandler} />
          <h4 className="mt-3">Prioridad</h4>
          <div className="d-flex flex-column align-items-start gap-3">
            <label htmlFor="baja">
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
            <label htmlFor="media">
              <input
                type="radio"
                name="priority"
                id="media"
                value="media"
                className="me-2"
                onChange={toDoPriorityHandler}
              />
              Media
            </label>
            <label htmlFor="importante">
              <input
                type="radio"
                name="priority"
                id="importante"
                value="importante"
                className="me-2"
                onChange={toDoPriorityHandler}
              />
              Para ayer!!!
            </label>
          </div>
          <button className="mt-3 btn btn-dark" onClick={addList}>
            Guardar
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
