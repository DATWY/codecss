// Kiểm tra nếu đang ở trang khác "/p/login.html" hoặc "/login"
if(window.location.pathname !== "/p/login.html" && window.location.pathname !== "/login" ) {
  if (localStorage.getItem('isLoggedIn') === 'true') {
      // Đăng nhập tự động nếu thông tin đăng nhập ko còn hiệu lực
      window.location.href = "/p/login"; // Chuyển hướng đến trang login
}
