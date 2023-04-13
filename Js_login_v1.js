

// Hàm kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
  if (document.URL.includes('plogin')) {
    return true;
  }
  if (localStorage.getItem('isLoggedIn') === 'true') {
    var expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate < new Date()) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('expirationDate');
      return false;
    } else {
      return true;
    }
  }
  return false; 
}

// Kiểm tra trạng thái đăng nhập và chuyển hướng nếu cần
if (!checkLoginStatus()) {
  window.location.href = "/p/login.html"; 
}
