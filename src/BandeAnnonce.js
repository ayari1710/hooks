import React from 'react'
import {Link}from 'react-router-dom'

const BandeAnnonce = ({location,history}) => {
    
    return (
        <div className="description">
            <h1>Description</h1>
            <h3>{location.state.el.Resume}</h3>
          <a href={location.state.el.lien}>La Bande d'BandeAnnonce </a>
            <button onClick={()=>history.goBack()}>Go Back</button>
        </div>
    )
}

export default BandeAnnonce
