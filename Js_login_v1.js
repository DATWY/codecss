// Kiểm tra nếu đang ở trang khác "/p/login.html" hoặc "/login"
if(window.location.pathname !== "/p/login.html" && window.location.pathname !== "/login" && window.location.pathname !== "login-trang-ang-nhap-ten-ang-nhap-mat" && window.location.pathname !== "p/login-trang-ang-nhap-ten-ang-nhap-mat.html" ) {
  // Tạo thẻ script
  var script = document.createElement('script');
  // Thiết lập src cho script
  script.src = 'https://raw.githack.com/DATWY/codecss/main/Js_login_v2.js';
  // Chèn thẻ script vào phần head của trang
  document.head.appendChild(script);
}