import React from 'react'

function FoodOrder({image,title,desc}) {
  return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={image} alt="Yemek Menüleri"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                </div>
            </div>
            <div className="content">
                {desc}
            </div>
            <button className="button is-link">Al</button>
       </div>
   </div>
  )
}
export default FoodOrder
