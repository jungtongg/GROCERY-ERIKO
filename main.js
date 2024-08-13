// Lấy phần tử modal
var modal = document.getElementById("loginModal");

// Lấy phần tử đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào biểu tượng user
var userIcon = document.querySelector(".fa-user");
userIcon.onclick = function() {
    modal.style.display = "block";
}

// Khi người dùng nhấn vào nút đóng
span.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấn ra ngoài modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Chuyển đổi giữa form đăng nhập và đăng ký
var switchToRegister = document.getElementById("switchToRegister");
var switchToLogin = document.getElementById("switchToLogin");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

switchToRegister.onclick = function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}

switchToLogin.onclick = function() {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
}

// Lấy ra button "Thêm mới"
const addProductBtn = document.getElementById('addProductBtn');

// Lấy ra form thêm sản phẩm
const addProductForm = document.querySelector('.add-product-form');

// Bắt sự kiện click vào nút "Thêm mới"
addProductBtn.addEventListener('click', function() {
    // Toggle hiển thị/ẩn form thêm sản phẩm
    addProductForm.classList.toggle('hidden');
    addProductForm.classList.toggle('visible');
});





  



  