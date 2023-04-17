const scrollToBottomLink = document.getElementById('menu');

scrollToBottomLink.addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

  const footerElement = document.querySelector('footer'); // Chọn phần tử footer

  footerElement.scrollIntoView({ behavior: 'smooth' }); // Chuyển đến phần tử footer với hiệu ứng trượt mượt
});

var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function () {
    // Thay đổi màu nền và nội dung của nút
    this.style.backgroundColor = "red";
    this.innerHTML = "Mua hàng";
  });
  buttons[i].addEventListener("mouseout", function () {
    // Thiết lập lại màu nền và nội dung của nút
    this.style.backgroundColor = "#4CAF50";
    this.innerHTML = this.getAttribute("data-gia") + "đ";
  });
}

