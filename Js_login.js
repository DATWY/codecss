import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyDy0rWuiomfGmkvbYusXQQ0Exc8k1_myjs",
    authDomain: "chat-on1.firebaseapp.com",
    projectId: "chat-on1",
    storageBucket: "chat-on1.appspot.com",
    messagingSenderId: "30955784641",
    appId: "1:30955784641:web:230c07f50e14ef2b8a8740",
    measurementId: "G-EL7SYFK34S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Get elements
const messageList = document.querySelector('.message-list');
const chatForm = document.querySelector('.chat-form');
const chatInput = chatForm.querySelector('input[type="text"]');

// Listen for new messages
onValue(ref(database, 'messages'), (snapshot) => {
  messageList.innerHTML = '';
  snapshot.forEach((childSnapshot) => {
    const message = childSnapshot.val();
    const li = document.createElement('li');
    li.textContent = message.text;
    messageList.appendChild(li);
  });
});

// Send message
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageText = chatInput.value.trim();
  if (messageText) {
    push(ref(database, 'messages'), {
      text: messageText
    });
    chatInput.value = '';
  }
});
