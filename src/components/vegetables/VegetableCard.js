import React from 'react'
import { Link } from 'react-router-dom'

const VegetableCard = ({ _id, title, image, description, user, vegLocation, isClaimed }) => (
  <Link to={`/vegetables/${_id}`}>
    <div className='vegCard'>
      {isClaimed && <p className='claimed'>CLAIMED!</p>}
      <img src={image} alt={title} />
      <div className='vegText'>
        <h2>{title}</h2>
        <p>Description: {description}</p>
        <p>Location: {vegLocation}</p>
        <p>Posted by: {user.username}</p>
      </div>
    </div>
  </Link>
)

export default VegetableCard