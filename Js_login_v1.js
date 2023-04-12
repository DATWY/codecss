

if (localStorage.getItem('isLoggedIn') !== 'true') {
    if (window.location.pathname !== '/login' && window.location.pathname !== '/p/login.html?m=1') {
    window.location.href = "/login";
  } 
      }
