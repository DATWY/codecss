// Khởi tạo Firebase
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

// Lấy tham chiếu đến Firebase Realtime Database
var database = firebase.database();

// Lấy số tiền từ Firebase và đặt vào các lọ
database.ref('money').once('value', function(snapshot) {
  var amounts = snapshot.val();
  document.getElementById('nec').innerHTML = formatNumber(amounts.nec);
  document.getElementById('lts').innerHTML = formatNumber(amounts.lts);
  document.getElementById('edu').innerHTML = formatNumber(amounts.edu);
  document.getElementById('play').innerHTML = formatNumber(amounts.play);
  document.getElementById('ffa').innerHTML = formatNumber(amounts.ffa);
  document.getElementById('give').innerHTML = formatNumber(amounts.give);
});

// Tính toán số tiền cho mỗi lọ khi người dùng nhập tổng số tiền
function calculate() {
  var newTotal = parseInt(document.getElementById('total').value);
  database.ref('total').once('value', function(snapshot) {
    var currentTotal = snapshot.val();
    var updatedTotal = currentTotal + newTotal;
    database.ref('total').set(updatedTotal);
    var nec = Math.round(updatedTotal * 0.5);
    var lts = Math.round(updatedTotal * 0.1);
    var edu = Math.round(updatedTotal * 0.1);
    var play = Math.round(updatedTotal * 0.1);
    var ffa = Math.round(updatedTotal * 0.1);
    var give = Math.round(updatedTotal * 0.1);
    database.ref('money').set({
      nec: nec,
      lts: lts,
      edu: edu,
      play: play,
      ffa: ffa,
      give: give
    });
    document.getElementById('nec').innerHTML = formatNumber(nec);
    document.getElementById('lts').innerHTML = formatNumber(lts);
    document.getElementById('edu').innerHTML = formatNumber(edu);
    document.getElementById('play').innerHTML = formatNumber(play);
    document.getElementById('ffa').innerHTML = formatNumber(ffa);
    document.getElementById('give').innerHTML = formatNumber(give);
  });
  return false;
}

// Trừ số tiền từ lọ khi người dùng bấm vào nút "Chi tiêu"
function spend(bucket) {
  database.ref('money/' + bucket).transaction(function(currentValue) {
    return (currentValue || 0) - 1;
  });
}
function formatMoney(amount) {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
