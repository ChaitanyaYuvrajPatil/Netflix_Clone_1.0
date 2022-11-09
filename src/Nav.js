import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });

    // return () => {
    //     window.removeEventListener("scroll");
    // };
  },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
       <img  
          className='nav__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
       />
       <img 
          className='nav__avatar'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk0740icFgeSCPD6x_0XYvWaJhlr0mu3vMGpb78-fe70eZhNoOwniR8I86Uu94icecEc&usqp=CAU"
          alt="Netflix Logo"
       />
    </div>
  )
}

export default Nav
