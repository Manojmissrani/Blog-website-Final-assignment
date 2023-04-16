import React, { useEffect, useState } from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { collection, query, getDocs, where, onSnapshot, getFirestore, collectionGroup } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwrDNHMYX4Vig0X2enw6T8bd_j_BLG-5M",
    authDomain: "reactapp-fe611.firebaseapp.com",
    databaseURL: "https://reactapp-fe611-default-rtdb.firebaseio.com",
    projectId: "reactapp-fe611",
    storageBucket: "reactapp-fe611.appspot.com",
    messagingSenderId: "422302899242",
    appId: "1:422302899242:web:d9b629a421e37f3723f753"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Card = (props) => {
  const navigate = useNavigate()
  const [Users, setUsers] = useState("")
  const [Loader, setLoader] = useState(true)

  const b = query(collection(db, "users"), where("uid", "==", props.uid));
  const c = getDocs(b);
  const d = onSnapshot(b, (c) => {
    const users = [];
    c.forEach((doc) => {
      users.push(doc.data());
      setLoader(false)
      for (var i = 0; i < users.length; i++) {
        setUsers(users[i])
      }
    });
  })

  return (
    <div className="card col-lg-4 col-md-6 col-12" key={props.key}>
      <div>
        <img src={props.img} className="card-img-top pointer" onClick={() => navigate(`/Post-Details/${props.id}`)} />
        <div className="card-body">
          <h5 className="card-title pointer" onClick={() => navigate(`/Post-Details/${props.id}`)}>{props.title.slice(0, 30) + "..."}</h5>
          <p className="card-text " >{props.des.slice(0, 40) + "..."}</p>
          <div className='Category mt-1'>
            <h5>Category</h5>
            <p>{props.Category}</p>
          </div>

        </div>
        <div className='card-footer'>
          <img src={Users.profile} className='profile-img' height="50" />
          <div>
            <h6>{Users.firstname+" "+Users.LastName}</h6>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card