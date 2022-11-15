import React, { Component } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

export default class ImageGenerator extends Component {
  generateImage = async () => {
    //Generate the image HERE
    console.log('Generate an image');

    //Get request to the route /random, the response is a json which contains an image src. 
    // I could also get the status code in the response and add an if statement for more validation.
    axios.get('http://localhost:8001/random')
      .then(function (response) {
        document.getElementById('imgContainer').src = response.data.message;
        document.getElementById('imgContainer').classList.remove("hidden");
      })
      .catch(function (error) {
        return error;
      });
  };

  render() {
    return (
      <div className='container'>
        <CssBaseline />
        <h2>Click the button to generate a new picture</h2>
        <Button
          variant='contained'
          onClick={this.generateImage}
          className='button'
        >
          Click Me!
        </Button>
        <img
          src=''
          alt='Random dog image'
          className='img-container hidden'
          id='imgContainer'
        />
      </div>
    );
  }
}