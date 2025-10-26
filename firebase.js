// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCth7igNCp0wMUoTQKBZKOfW4aOKCfTU04",
  authDomain: "seizure-track-project.firebaseapp.com",
  projectId: "seizure-track-project",
  storageBucket: "seizure-track-project.firebasestorage.app",
  messagingSenderId: "547973698821",
  appId: "1:547973698821:web:f5c056ef6a63b2e9a4d36c",
  measurementId: "G-93X9230JWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export the authentication object so you can use it in other files
export { auth };

