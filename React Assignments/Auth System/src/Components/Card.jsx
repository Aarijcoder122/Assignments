
var Card = ({user}) => {
    return(
        <div className="cards">
        <p>Email:{user.email}</p>
        <p>Age:{user.age}</p>
        <p>Password: {user.password}</p>
        </div>
    )
}

export default Card