import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [language, setLanguage] = useState('Buenos días');

  const mapLang = {
    es: 'Buenos días',
    en: 'Good Morning',
    fr: 'Bonjour',
  };

  const languageHandler = ({ target }) => {
    const value = target.value;

    setLanguage(value);
  };

  return (
    <>
      <form className="container d-flex justify-content-around my-5">
        <label>
          <input
            type="radio"
            name="lang"
            value="Buenos días"
            onChange={(event) => languageHandler(event)}
            defaultChecked
          />
          <span className="ms-1">ES</span>
        </label>
        <label>
          <input
            type="radio"
            name="lang"
            value="Good morning"
            onChange={(event) => languageHandler(event)}
          />
          <span className="ms-1">EN</span>
        </label>
        <label>
          <input
            type="radio"
            name="lang"
            value="Bonjour"
            onChange={(event) => languageHandler(event)}
          />
          <span className="ms-1">FR</span>
        </label>
      </form>
      <h1 className="text-center fw-bold">{language}</h1>
    </>
  );
}

export default App;
