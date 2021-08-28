// Bài 4:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Tìm số dương đầu tiên trong mảng
 * B2: Nếu tìm thấy thì gán giá trị đó cho min
 * Sau đó duyệt mảng với điều kiện là số đó phải lớn hơn bằng 0 và
 * nếu nó nhỏ hơn min thì gán min là giá trị đó
 * B3: Ngược lại ko tìm thấy thì hiện mảng toán số âm
 * Khối 3:
 * Hiện sô dương nhỏ nhất
 */
function TimSoDuongDauTien() {
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] >= 0) return i;
  }
  return -1;
}
function TimSoDuongNhoNhat() {
  var viTriDuongDauTien = TimSoDuongDauTien();
  var text = '';
  if (viTriDuongDauTien == -1) {
    text = 'Mảng toàn số âm';
  } else {
    var minDuong = arrayNum[viTriDuongDauTien];
    for (var i = viTriDuongDauTien + 1; i < arrayNum.length; i++) {
      if (arrayNum[i] < minDuong && arrayNum[i] >= 0) {
        minDuong = arrayNum[i];
      }
    }
    text = minDuong;
  }
  document.getElementById('txtBai4').innerHTML = text;
}
document.getElementById('btnBai4').onclick = TimSoDuongNhoNhat;
