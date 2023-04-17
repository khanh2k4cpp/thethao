const paymentButton = document.getElementById('btn-payment');

paymentButton.addEventListener('click', function() {
  const isConfirmed = confirm('Bạn đã thanh toán thành công Ahihi ! Bấm Oke để quay lại trang chủ và tiếp tục mua hàng nhé.');

  if (isConfirmed) {
    window.location.href = './index.html';
  }
});
