// src/login.js - Xử lý đăng nhập
function login(email, password) {
 if (!email || !password) {
 alert('Vui lòng nhập email và mật khẩu!');
 return false;
 }
 // Giả lập kiểm tra đăng nhập
 if (email === 'admin@shop.com' && password === '123456') {
 alert('Đăng nhập thành công!');
 return true;
 }
 alert('Email hoặc mật khẩu không đúng!');
 return false;
}
document.getElementById('login-form').addEventListener('submit', function(e) {
 e.preventDefault();
 login(this.email.value, this.password.value);
});