function Main(){

  function changecolor(){
    var navbar = document.getElementById("navbar")
    if(navbar.style.backgroundColor == "rgb(7, 59, 7)"){
      navbar.style.backgroundColor = "aqua"
    }else{
      navbar.style.backgroundColor = "rgb(7, 59, 7)"
    }

  }
  
 return (

  <> 

  <div className="navbar" id="navbar">
     <h1>Coding nepal</h1>
     <p style={{marginLeft:"600px"}}>Home</p>
     <p>About</p>
     <p>Services</p>
     <p>Contact</p>
     <button onClick={changecolor}>Click</button>
  </div>  

  <div className="allcards">

    <div className="card">
      <img src="https://tse4.mm.bing.net/th/id/OIP.AnGcEycs1GK7iiNvzFqQNAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"  />
    </div>

  <div className="card">
    <img src="https://tse4.mm.bing.net/th/id/OIP.AnGcEycs1GK7iiNvzFqQNAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"  />
  </div>

  <div className="card">
    <img src="https://tse4.mm.bing.net/th/id/OIP.AnGcEycs1GK7iiNvzFqQNAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"  />
  </div>

  <div className="card">
    <img src="https://tse4.mm.bing.net/th/id/OIP.AnGcEycs1GK7iiNvzFqQNAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"  />
  </div>

  </div>

  
  
  </>

)
}

export default Main