import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Profile from "./Profile";
import '.././logIn.css'


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // state to keep track of user object

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // set user state to user object or null if user is not logged in
    });
    return unsubscribe;
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        alert(user.email + " Signed Up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        setError(errorMessage);
      });
  };

  const handleLogIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // logged in
        const user = userCredential.user;
        alert(user.email + " Logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        setError(errorMessage);
      });
  };

  const handleLogOut = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      // signed out
      alert("Logged Out");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      setError(errorMessage);
    });
  };
  //show only profile section if user is logged in
  let profile = null;
  if (user) {
    profile = (
      <Profile />
    )
  }
  return (
    <div className="logInContainer">
      {profile}
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <label>
         
            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />
          </label>
          <br />
          <label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
          </label>
          <br />
          <button onClick={handleLogIn}>Log In</button>
          <button onClick={handleSignUp}>Sign Up</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LogIn;
