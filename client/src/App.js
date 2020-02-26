import React, { useState } from 'react';
import {Route, NavLink} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    // console.log("this is set saved list", setSavedList( [...savedList, movie] ))
  };

  return (
    <div>
      <SavedList list={savedList} />
        {/* <nav>
          <div>
            <NavLink to='/'>Movie List</NavLink>
          </div>
        </nav> */}
      <Route exact path="/">
        <MovieList/>
      </Route>
      <Route path="/movies/:movieId">
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
