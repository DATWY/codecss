

if (localStorage.getItem('isLoggedIn') !== 'true') {
    if (window.location.pathname !== '/login' && window.location.pathname !== '/p/login.html') {
    window.location.href = "/login";
  } 
      }
