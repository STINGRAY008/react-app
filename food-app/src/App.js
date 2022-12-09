import React, {useState} from 'react';
import "./App.css";
import Axios from 'axios'
import Recipe from './components/Recipe'

const App = () => {
  const [query, setQuery] = useState("");
  const[recipes, setRecipes] = useState ([]);


  const APP_ID = "481932d2";
  const APP_KEY = "a793dbbe28d4ea0a39bbb619692069fa";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits)

    console.log(result);
    setQuery('');
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
        <input 
          type="text" 
          placeholder="Search Food" 
          autoComplete="off" 
          onChange= {onChange}
          value={query} 
          />
        <input type="submit" value="search"/>
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => 
        <Recipe recipe={recipe}/>)}

      </div>
    </div>
  );
};



export default App; 

