import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
    <img id="pro" src="https://image.freepik.com/free-vector/racoon-mascot-illustration-design_97365-146.jpg"></img>
    <img id="pro1" src="https://e1.pxfuel.com/desktop-wallpaper/814/68/desktop-wallpaper-top-stream-starting-soon-screens-ultimate-stream-start-thumbnail.jpg"></img>
    <h2 id="lo">LOG IN</h2>
    <br></br>
    <h3 id="ma">Email    : </h3>
    <input type="email" id="mail" title='Enter the Email ....'></input>
    <h3 id="pass">Passward : </h3>
    <input type="password" id="passs" title='Enter the Password ....'></input>
    <br></br>
    <nav>
    <Link to='/web'>
    <button type="button" value="sumbit" id='sub'>SUBMIT</button>
    </Link>
    </nav>
    </div>
  )
}
