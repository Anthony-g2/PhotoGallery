import React, { Component } from 'react'
import axios from 'axios'
import Photo from './Photo'
import update from 'immutability-helper'

class PhotosContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      editingPhotoId: null
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/photos.json')
    .then(res => {
      console.log(res)
      this.setState({photos:res.data})
    })
    .catch(err => console.log(err))
  }

  addNewPhoto(){
    axios.post(
      'http://localhost:3001/api/v1/photos',
      { photo:
        {
          url: '',
          photo: ''
        }
      }
    )
    .then(res => {
      console.log(res)
      const photos = update(this.state.photos, {
        $splice: [[0, 0, res.data]]
      })
      this.setState({
        photos: photos,
        editingPhotoId: res.data.id
      })
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <button className="newPhotoButton"
          onClick={this.addNewPhoto.bind(this)} >
          New Photo
        </button>
        <br />
        {this.state.photos.map((photo) => {
          return(<Photo photo={photo} key={photo.id}/>)
        })}
      </div>
    )
  }
}

export default PhotosContainer
