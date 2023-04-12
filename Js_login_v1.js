

if (localStorage.getItem('isLoggedIn') !== 'true') {
    if (window.location.pathname !== '/login' || window.location.pathname !== '/p/login') {
    window.location.href = "/login";
  } 
      }
