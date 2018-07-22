import React from 'react'

const Photo = ({photo}) =>
  <div className="tile" key={photo.id}>
    <img width="150" height="auto" src={photo.url} alt={photo.desc}/>
    <p>{photo.desc}</p>
    <br/>
  </div>

export default Photo
