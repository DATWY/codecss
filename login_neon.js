import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

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

window.onload = () => {
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
};
