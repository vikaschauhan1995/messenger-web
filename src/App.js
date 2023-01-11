import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';


function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        setIsUserSignedIn(true);
      } else {
        setIsUserSignedIn(false);
      }
    });
  }, []);
  if (isUserSignedIn === true) {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
