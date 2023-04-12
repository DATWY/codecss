// Hàm để thiết lập cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Hàm để lấy giá trị của cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Hàm kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
  var user = getCookie("username");
  if (user !== "") {
    // Người dùng đã đăng nhập
    return true;
  } else {
    // Người dùng chưa đăng nhập
    return false;
  }
}

// Kiểm tra trạng thái đăng nhập khi tải trang
if (checkLoginStatus()) {
  // Người dùng đã đăng nhập, giữ nguyên trang web
} else {
  // Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
  window.location.href = "/p/login.html";
}

// Khi đăng nhập thành công
if (userData.username === username && userData.password === password) {
  alert('Đăng nhập thành công!');
  setCookie("username", username, 7); // Thiết lập cookie cho username, hết hạn sau 7 ngày
  // Redirect đến trang chủ hoặc trang khác tùy ý
} else {
  alert('Tên đăng nhập hoặc mật khẩu không đúng.');
}
