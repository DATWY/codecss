// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeKmAb7bAwPhTXNAPFvK6Hpvl3QQsql2U",
    authDomain: "chat-48060.firebaseapp.com",
    databaseURL: "https://chat-48060-default-rtdb.firebaseio.com",
    projectId: "chat-48060",
    storageBucket: "chat-48060.appspot.com",
    messagingSenderId: "1087245062669",
    appId: "1:1087245062669:web:e4ccc21bd4361490b0bb44",
    measurementId: "G-S477EP6FGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('messages');

// Get Firebase references
const auth = getAuth();
const database = getDatabase();

// Login event listener
loginForm.addEventListener('submit', e => {
	e.preventDefault();

	const email = emailInput.value;
	const password = passwordInput.value;

	// Sign in user
	signInWithEmailAndPassword(auth, email, password)
		.catch(error => {
			console.error(error);
			alert(error.message);
		});
});

// Render messages
function renderMessage(data) {
	const { name, message } = data.val();
	const li = document.createElement('li');
	li.innerText = `${name}: ${message}`;
	messageList.appendChild(li);
}

// Message form event listener
messageForm.addEventListener('submit', e => {
	e.preventDefault();

	const user = auth.currentUser;
	const message = messageInput.value;

	// Save message to Firebase
	push(ref(database, 'messages'), { name: user.displayName, message })
		.catch(error => {
			console.error(error);
			alert(error.message);
		});

	messageInput.value = '';
});

// Listen for new messages
onValue(ref(database, 'messages'), snapshot => {
	messageList.innerHTML = '';
	snapshot.forEach(childSnapshot => {
		renderMessage(childSnapshot);
	});
});

// Create user event listener
auth.onAuthStateChanged(user => {
	if (user) {
		// User is signed in
		messageForm.style.display = 'block';
		loginForm.style.display = 'none';
	} else {
		// No user is signed in
		messageForm.style.display = 'none';
		loginForm.style.display = 'block';
	}
});
