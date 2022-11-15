import React, { Component } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

export default class ImageGenerator extends Component {
  //Populate the selct's options

  generateImage = async (e) => {
    //Generate the image HERE
    console.log('Generate an image');

    //Get request to the backend route randomBreed and pass the value of the selected option as a parameter
    axios.get('http://localhost:8001/randomBreed', {
      params: {
        breed: e.target.value,
      },
    })
      .then(function (response) {
        document.getElementById('imgContainer').src = response.data.message;
        document.getElementById('imgContainer').classList.remove("hidden");
      })
      .catch(function (error) {
        return error;
      });
  };

  generateDropdown() {
    //Get request to the backend to receive a response of all the breeds
    axios.get('http://localhost:8001/breeds')
      .then(function (response) {
        var dropdown = document.getElementById('list');
        var breedList = response.data.message;

        //Loop through the json object and generate all the options for every breed.
        for (var key in breedList) {
          dropdown.innerHTML += dropdown.innetHTML + '<option value"' + key + '">' + key + '</option>';
        }
      })
      .catch(function (error) {
        return error;
      });
  }

  render() {
    { this.generateDropdown() }
    return (
      <div className='container'>
        <CssBaseline />
        <h2>Select a breed to generate an image</h2>
        <select id='list' onChange={this.generateImage} className='select'>
          <option value=''>Select a breed</option>
        </select>
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