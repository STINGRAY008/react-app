import React, {useState} from 'react';
import "./App.css";
import Axios from 'axios'

const App = () => {
  const [query, setQuery] = useState("");


  const APP_ID = "481932d2"
  const APP_KEY = "a793dbbe28d4ea0a39bbb619692069fa"
  const url = 'https://api.edamam.com/search?q={query}&app_id=${APP_ID}&app_key=${APP_KEY}';

  const getData = async () => {
    const result = await Axios.get(url);

    console.log(result)
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.prevenDefault();
    getData();
  };

  return(
    <div className="App">
      <h1>Food Searching Menu</h1>
      <form className="search-form" onSubmit= {onSubmit}>
        <input type="text" placeholder="Search Food" autoComplete="off" onChange= {onChange} />
        <input type="submit" value="search"/>
      </form>
    </div>
  );
};



export default App; 

