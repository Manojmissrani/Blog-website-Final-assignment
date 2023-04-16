import React, { useEffect, useState } from 'react'
import { Card } from '../../component'
import "./index.css"
// import { auth, onAuthStateChanged } from "firebase/app"
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



const Blog = () => {
    const [Blog, setBlog] = useState("")
    const [Loader, setLoader] = useState(true)
    useEffect(() => {
        const q = query(collection(db, "Blogs"), where("stats", "==", "Approved"));
        const querySnapshot = getDocs(q);
        const a = onSnapshot(q, (querySnapshot) => {
            const Blogs = [];
            querySnapshot.forEach((doc) => {
                Blogs.push(doc.data());
                setBlog(Blogs)
                setLoader(false)
            });
        })
    }, [])



    return (
        <div>
            <br />
            <div className='div-main-card pb-0'>
                <h5 className='font-bold'> All Posts : </h5>
            </div>
            <div className='div-main-card'>
                {
                    Loader ?
                        <div className='loaderdiv d-flex align-items-center justify-content-center h-100 w-100' >
                            <img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" />
                        </div>
                        :
                        Blog.map((v, i) => {
                            return (
                                <Card id={v.id} uid={v.uid} key={i} Category={v.Category} img={v.url} date={v.date} des={v.Description} title={v.Title} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Blog