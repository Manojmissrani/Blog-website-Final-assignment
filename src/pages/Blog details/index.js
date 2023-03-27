import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { collection, query, getDocs, where, onSnapshot, getFirestore } from "firebase/firestore";
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

const Blogdetails = () => {
    const [Blog, setBlog] = useState("")
    const params = useParams();
    const location = useLocation();
    console.log("location", location);
    const q = query(collection(db, "Blogs"), where("stats", "==", "Approved"));
    const querySnapshot = getDocs(q);
    const a = onSnapshot(q, (querySnapshot) => {
        const Blogs = [];
        querySnapshot.forEach((doc) => {
            Blogs.push(doc.data());
            setBlog(Blogs)
            // setLoader(false)
        });
    })

    useEffect(() => {
        let filtered = Blog.filter(function (val) {
            return val === params.id;
        });
        setBlog(filtered);
    }, []);
    return (
        <div>Blogdetails{console.log(Blog)}</div>
    )
}
export default Blogdetails