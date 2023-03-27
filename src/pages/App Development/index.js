import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../../component'
import { Card } from '../../component'
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

const AppDevelopment = () => {

    const [Blog, setBlog] = useState("")
    const [Users, setUsers] = useState("")
    const [Loader, setLoader] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "Blogs"), where("stats", "==", "Approved"));
        const querySnapshot = getDocs(q);
        const a = onSnapshot(q, (querySnapshot) => {
            const Blogs = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data());
                Blogs.push(doc.data());
                // console.log(Blogs)
                // if (Blogs.Category === "Web Development") {
                setBlog(Blogs)
                setLoader(false)

                // }
            });
        })
    }, [])

    return (
        <div>
            <Navbar />
            <header>
                <div class="text-center bg-image-app" >
                    <div class="mask" >
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <h1 class="text-white">App Development</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className='div-main-card'>
                {
                    Loader ?
                        <img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="" />
                        :
                        Blog.map((v, i) => {
                            const userq = query(collection(db, "users"));
                            const unsubscribe = onSnapshot(userq, (querySnapshot) => {
                                const users = [];
                                querySnapshot.forEach((doc) => {
                                    users.push(doc.data());
                                    users.map((v, i) => {
                                        setUsers(users)
                                    })
                                });
                            });
                            if (v.Category === "App Development") {
                                return (
                                    <Card profile={Users.profile} key={i} Category={v.Category} img={v.url} date={v.date} des={v.Description} title={v.Title} />
                                )
                            }
                        })}
            </div>
            <Footer />

        </div>
    )
}

export default AppDevelopment