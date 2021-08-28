// Bài 8
/**
 * Mô hình 3 khối
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Viết hàm kiểm tra số có phải là nguyên tố
 * B2: Duyệt mảng và kiểm tra số trong mảng có phải là nguyên tố
 * Nếu thỏa điều kiển thì trả về ngay
 * ngược lại không thì trả kết quả về -1
 * B3: Nếu kết quả bằng -1 thì hiện mảng không có số nguyên tố
 * ngược lại thì hiện số nguyên tó đầu tiên
 * Khối 3:
 * Hiển thị kết quả lên giao diện
 */
function KiemTraNguyenTo(n) {
  if (n < 2) return 0;
  if (n > 2) {
    if (n % 2 == 0) return 0;
    for (var i = 3; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return 0;
    }
  }
  return 1;
}
function TimSoNguyenToDauTien() {
  var giaTri = -1;
  for (var i = 0; i < arrayNum.length; i++) {
    if (KiemTraNguyenTo(arrayNum[i])) {
      giaTri = arrayNum[i];
      break;
    }
  }
  var text = '';
  if (giaTri == -1) {
    text = 'Mảng không tồn tại số nguyên tố';
  } else {
    text = 'Số nguyên tố đầu tiên trong mảng là: ' + giaTri;
  }
  document.getElementById('txtBai8').innerHTML = text;
}
document.getElementById('btnBai8').onclick = TimSoNguyenToDauTien;
