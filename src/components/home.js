import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../App.css'
const Home = () => {
    return (
        <div className="image">
          <Helmet>
          <title>ball sauce company</title>
          <meta name="description" content="b.s.Co Ball Sauce Company specializing in hot sauces two at a time" />
          </Helmet>
        <div className="App">
          
          <div className="App-header"> 
          <h1 className='text'>b . s . Co</h1>           
              <p className='text' >
                ball sauce company
              </p>
              
          </div>
          </div>
          </div>
        );
    }
export default Home;