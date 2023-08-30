import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//[(user, setUser)] = useState();

function App() {
  const [text, setText] = useState('Hola');
  const [user, setUser] = useState({});

  const textHandler = ({ target }) => {
    const value = target.value;

    setText(value);
  };

  const userHandler = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={(event) => userHandler(event)}
      />
      <input
        type="text"
        placeholder="Lastname"
        name="lastname"
        onChange={(event) => userHandler(event)}
      />

      <h2>Name: {user.name}</h2>
      <h2>Lastname: {user.lastname}</h2>
    </>
  );
}

export default App;
