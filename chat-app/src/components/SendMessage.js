import React, {useState} from "react";
import {auth, db} from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({scroll}) => {
  const [message, setMessage] = useState("");

  const sendMessage = async(event) =>{
    event.preventDefault();

    if(message.trim() === ""){
      alert("Enter valid message");
      return;
    }

    const {uid, displayName, photoURL} = auth.currentUser;

    await addDoc(collection(db, "messsages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({behavior: "smooth"});
  };

  return (
    <form className="send-message" onSubmit={(event) => sendMessage(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        value = {message}
        type="text"
        className="form-input__input"
        placeholder="type message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
