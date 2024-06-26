import React from "react";
import {auth} from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to My Chit-Chat.</h2>
      <p>Please SignIn to continue using the App.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
