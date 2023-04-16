import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "./index.css"
import { Footer, Navbar, Share } from "../../component";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, getDocs, getDoc, doc, where, onSnapshot, getFirestore } from "firebase/firestore";
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
const auth = getAuth(app);


const PostDetails = () => {
  const params = useParams();
  const location = useLocation();
  const [Blog, setBlog] = useState([])
  const [Loader, setloader] = useState(true)
  const [Users, setUsers] = useState("")


  const q = query(collection(db, "Blogs"), where("id", "==", params.id));
  const querySnapshot = getDocs(q);
  const a = onSnapshot(q, (querySnapshot) => {
    const Blogs = [];
    querySnapshot.forEach((doc) => {
      Blogs.push(doc.data());
      setBlog(Blogs)
      setloader(false)
    });
  })

  return (
    <div>
      {
        Loader ?
          <div className='loaderdiv d-flex align-items-center justify-content-center h-100 w-100' >
            <img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" />
          </div>
          :
          <div>
            <Navbar />
            <div className="row align-items-center mt-4  pb-5">
              {
                Blog.map((v, i) => {
                  if (v.stats === "Approved") {
                    const b = query(collection(db, "users"), where("uid", "==", v.uid));
                    const c = getDocs(b);
                    const d = onSnapshot(b, (c) => {
                      const users = [];
                      c.forEach((doc) => {
                        users.push(doc.data());
                        setUsers(users)
                      });
                    })
                    return (
                      <div className="p-2 pt-0 pending-post" key={i}>
                        <img src={v.url} className="post-details-img mb-5" />
                        {Users !== "" &&
                          <div className='card-footer footer'>
                            <div className='card-footer'>
                              <img src={Users[0].profile} className='profile-img' height="50" />
                              <div>
                                <h6>{Users[0].firstname + " " + Users[0].LastName}</h6>
                                <p>{v.date}</p>
                              </div>
                            </div>
                            <div>
                              <Share />
                            </div>

                          </div>}



                        <div className="stats-post pb-3">
                          <p className="bolder">Selected Category</p>
                          <p className="bolder">{v.Category}</p>
                        </div>
                        <div className="pt-3 p-2 border-title-des">
                          <h4 className="bolder-ex">{v.Title}</h4>
                          <h5>{v.Description}</h5>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
            <Footer />
          </div>
      }
    </div>
  )
}
export default PostDetails