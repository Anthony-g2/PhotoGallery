import React, { Component } from 'react'
import axios from 'axios'
import Photo from './Photo'
import update from 'immutability-helper'

import PhotoForm from './PhotoForm'

class PhotosContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      editingPhotoId: null,
      notification: ''
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

  updatePhoto = (photo) => {
    const photoIndex = this.state.photos.findIndex(x => x.id === photo.id)
    const photos = update(this.state.photos, {
      [photoIndex]: { $set: photo }
    })
    this.setState({
      photos: photos,
      notification: 'Changes Saved'
    })
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  resetEditingId = () => {
    this.setState({editingPhotoId: ''})
  }


  render() {
    return (
      <div>
        <button className="newPhotoButton"
          onClick={this.addNewPhoto.bind(this)} >
          New Photo
        </button>
        <span className="notification">
          {this.state.notification}
        </span>
        <br />
        {this.state.photos.map((photo) => {
          if(this.state.editingPhotoId === photo.id) {
            return(<PhotoForm photo={photo} key={photo.id}
                      updatePhoto={this.updatePhoto.bind(this)}
                      resetNotification={this.resetNotification.bind(this)}
                      resetEditingId={this.resetEditingId.bind(this)}/>)
          } else {
            return(<Photo photo={photo} key={photo.id}/>)
          }
        })}
      </div>
    )
  }
}

export default PhotosContainer
