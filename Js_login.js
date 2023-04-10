var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  var username = form.querySelector('#username').value;
  var password = form.querySelector('#password').value;
  if (username === 'admin' && password === '123456') {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loginTime', new Date().getTime());
    window.location.href = 'https://chatwywy.blogspot.com/';
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không chính xác'); 
  }
});

var isLoggedIn = localStorage.getItem('isLoggedIn');
var loginTime = localStorage.getItem('loginTime');
if (isLoggedIn === 'true' && loginTime && (new Date().getTime() - loginTime) < (1 * 60 * 1000)) {
  window.location.href = 'https://chatwywy.blogspot.com/';
} 
