import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import { data, Link } from "react-router-dom"

var Home = () => {

    var[users,Setusers] = useState([])

    var getdata = async () => {
        let result = await axios.get("https://dummyjson.com/users")
        Setusers(result.data.users)
        console.log(result.data.users)
    }

    useEffect(function(){
        getdata()
    },[])

    return(
        <>

        <h1>User Dashboard</h1>

    {users.map ( (user) => {
        return(

            <Link to={`/Home/${user.id}`} key={user.id}>
                <Card user= {user} />
            </Link>

        )
    } ) }
        


        

        </>
    )
}

export default Home


