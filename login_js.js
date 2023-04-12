import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
        // Thông tin cấu hình Firebase
              apiKey: "AIzaSyBYuymhxNmf22V2C93HAmCuNK6_wFspT3U",

  authDomain: "chat-wywy.firebaseapp.com",

  databaseURL: "https://chat-wywy-default-rtdb.firebaseio.com",

  projectId: "chat-wywy",

  storageBucket: "chat-wywy.appspot.com",

  messagingSenderId: "452796127167",

  appId: "1:452796127167:web:600c0332fa5d03a914f30a",

  measurementId: "G-FK4FBJ4EY6"
      };
      firebase.initializeApp(firebaseConfig);

      // Get a reference to the database service
      var database = firebase.database();

      // Lắng nghe sự kiện "submit" của form
      document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form đi

        // Lấy giá trị của username và password
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Kiểm tra xem password đã được nhập hay chưa
        if (password === '') {
          alert('Vui lòng nhập mật khẩu!');
          return;
        }

        // Truy xuất dữ liệu từ database để kiểm tra thông tin đăng nhập
        var loginRef = database.ref('login');
        loginRef.once('value').then(function(snapshot) {
          var userData = snapshot.val(); // Lấy dữ liệu từ snapshot

          // So sánh thông tin đăng nhập với dữ liệu từ database
          if (userData.username === username && userData.password === password) {
            alert('Đăng nhập thành công!');
            // Redirect đến trang chủ hoặc trang khác tùy ý
          } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng.');
          }
        });
      });
