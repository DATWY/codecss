import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy0rWuiomfGmkvbYusXQQ0Exc8k1_myjs",
  authDomain: "chat-on1.firebaseapp.com",
  projectId: "chat-on1",
  storageBucket: "chat-on1.appspot.com",
  messagingSenderId: "30955784641",
  appId: "1:30955784641:web:290bef4ff3dd70498a8740",
  measurementId: "G-6TWCT3CL3G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const messagesRef = collection(db, "messages");

document.getElementById("send").addEventListener("click", async () => {
  const messageText = document.getElementById("message").value;

  if (messageText.trim() !== "") {
    try {
      await addDoc(messagesRef, {
        text: messageText,
        timestamp: new Date().toISOString()
      });
      document.getElementById("message").value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
});

const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

onSnapshot(messagesQuery, (querySnapshot) => {
  const messagesContainer = document.getElementById("chat-messages");
  messagesContainer.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = doc.data().text;
    messagesContainer.appendChild(messageElement);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
