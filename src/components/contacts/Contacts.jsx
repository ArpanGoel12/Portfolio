import "./Contacts.scss";
import React from "react";
import { useState,useRef} from "react";


export default function Contact() {
  const [message, setMessage] = useState(false);
  const[name,setname]=useState("");
  const inputRef=useRef(null);
  const inputRef2=useRef(null);
  const[invalid,setinValid]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setname(inputRef.current.value);
    if(inputRef.current.value=="" || inputRef2.current.value==""){
      setMessage(false);
      setinValid(true);
    }
    else{
    setMessage(true);
    setinValid(false);
    }
    inputRef.current.value="";
    inputRef2.current.value="";
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" ref={inputRef} />
          <input placeholder="Message" ref={inputRef2}></input>
          <button type="submit">Send</button>
          {message && <span>Thanks for contacting me, {name}</span>}
          {invalid && <span>Invalid input, please try again</span>}
        </form>
      </div>
    </div>
  );
}