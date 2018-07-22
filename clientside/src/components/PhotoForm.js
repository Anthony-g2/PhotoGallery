import React, { Component } from 'react'
import axios from 'axios'

class PhotoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.photo.url,
      desc: this.props.photo.desc
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const photo = {
      url: this.state.url,
      desc: this.state.desc
    }

    axios.put(
      `http://localhost:3001/api/v1/photos/${this.props.photo.id}`,
      {
        photo:photo
      })
    .then(res => {
      console.log(res)
      this.props.updatePhoto(res.data)
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className='tile'>
        <form onBlur={this.handleBlur.bind(this)}>
          <input className='input' type='text'
            name='url' placeholder='Enter Photo Url'
            value={this.state.url} onChange={this.handleInput.bind(this)}/>
          <textarea className='input' name='desc'
            placeholder='Enter Photo Description'
            value={this.state.desc} onChange={this.handleInput.bind(this)}></textarea>
        </form>
      </div>
    );
  }
}

export default PhotoForm
