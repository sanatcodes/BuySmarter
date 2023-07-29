import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../../features/users/userSlice";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        logIn({
          id: userCredential.user.uid,
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          role: "Wholesaler", // Or Investor, depending on your business logic
          isLoggedIn: true,
          isGoogleSignIn: false,
        })
      );
      history.push("/"); // Redirect to homepage after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
