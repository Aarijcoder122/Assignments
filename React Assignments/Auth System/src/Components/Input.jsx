var Input = ({placeholder,type,func}) => {
    return(
            <input type={type} placeholder={placeholder} onChange={(e) => func(e.target.value,type)} />
    )
}

export default Input