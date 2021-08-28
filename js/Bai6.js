// Bài 6:
/**
 * Mô hình 3 khối
 * Khối 1:
 * vị trí của 2 só trong mảng
 * Khối 2:
 * B1: Lấy vị trí của 2 số từ form
 * B2: Hoán vị trí của 2 số đó trong mảng
 * Khối 3:
 * Hiển thị kết quả lên giao diện
 */
function DoiCho2Vitri() {
  var viTri1 = parseInt(document.getElementById('inputNum1').value);
  var viTri2 = parseInt(document.getElementById('inputNum2').value);
  var tam = arrayNum[viTri1];
  arrayNum[viTri1] = arrayNum[viTri2];
  arrayNum[viTri2] = tam;
  document.getElementById('txtBai6').innerHTML =
    'Mảng sau khi hoán đổi: <br>' + HienThiMang(arrayNum);
}
document.getElementById('btnBai6').onclick = DoiCho2Vitri;
