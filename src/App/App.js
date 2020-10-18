import React from 'react';
import { Meme } from '../Meme/Meme';
import { Switch, Route } from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
// import styles from './styles.module.css';

export const App = () => {
  return (
    <div>
      <h1> <a href="https://memebuddy.netlify.app/">Meme Buddy</a> </h1>

      <Switch>
        <Route exact path='/'>
          <Meme />
        </Route>
        <Route path='/generated'>
          <MemeGenerated />
        </Route>
      </Switch>

      <h2> <a href="https://github.com/Viraaaj/Meme-Buddy" target="_blank"> Made by Viraj Nimbalkar </a> </h2>  

    </div> 
  );
}

