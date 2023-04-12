

if (localStorage.getItem('isLoggedIn') !== 'true') {
      // Đăng nhập tự động nếu thông tin đăng nhập còn hiệu lực
      window.location.href = "/login"; // Chuyển hướng đến trang home
    }
