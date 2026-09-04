import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {

    var {id} = useParams()

    const [userDetail, setUserDetail] = useState({});

    const getData = async () => {
        let result = await axios.get(
            `https://dummyjson.com/users/${id}`
        );

        setUserDetail(result.data);
    };

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <div>

            <h1>This is a user detail page.. {id}</h1>

            <div>Age: {userDetail.age}</div>
            <div>Email: {userDetail.email}</div>
            <div>Name: {userDetail.firstName}</div>
            <div>Password: {userDetail.password}</div>

        </div>
    );
};

export default UserDetailPage;





// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"
// import { useParams } from "react-router-dom"


// var UserDetailPage =  () => {

//     var { id } = useParams()

//     var [ userDetail,Setusers ] = useState({})

//     var getdata = async () => {
//         var result = await axios.get(`https://dummyjson.com/users/${id}`)
//     }

//     Setusers(result.data)

//     useEffect(function(){
//         getdata()
//     },[id])

//         return (
//         <div>

//             <h1>This is a user detail page.. {id}</h1>

//             <div>Age: {userDetail.age}</div>
//             <div>Email: {userDetail.email}</div>
//             <div>Name: {userDetail.firstName}</div>
//             <div>Password: {userDetail.password}</div>

//         </div>
//     );

// }

// export default UserDetailPage;