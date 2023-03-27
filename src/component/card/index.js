import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
const Card = (props) => {
  const navigate = useNavigate()
  if (props.profile) {

  }
  return (
    <div class="card col-lg-4 col-md-6 col-12">
      <div>
        <img src={props.img} class="card-img-top" onClick={()=>navigate(`/Blog-details/${props.img}`)} />
        <div class="card-body">
          {/* <p class="card-text">{props.date}</p> */}
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.des}</p>

          <div className='Category'>
            <h5>Category</h5>
            <p>{props.Category}</p>
          </div>

        </div>
        <div className='card-footer'>
          <div className='img-profile'><img src={props.profile} height={60} /></div>
          <div className='name-date'>
            <h5>{props.name}</h5>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card