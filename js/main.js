/**
 * Mô hình ba khối
 * Chung: Tạo các biến toàn cục để sủ dụng
 * Khối 1:
 * num
 * Khối 2:
 * B1: Tạo biến num và lấy giá trị từ form
 * B2: Thêm num vào mảng
 * - Dùng hàm push của mảng để thêm số
 * - Sau đó cho nó gắn nó vào chuỗi đê hiển thị trên giao diện
 * B3: Hiện kết quả lên giao diện
 * Khối 3:
 * Hiển thị được các số vừa thêm
 */
var arrayNum = [];
var text = '';

function HienThiMang(a) {
  text = '';
  for (var i = 0; i < a.length; i++) {
    if (i == a.length - 1) {
      text += a[i];
    } else {
      text += a[i] + ', ';
    }
  }
  return text;
}
function ThemMotSoVaoMang() {
  var num = parseInt(document.getElementById('inputNumN').value);
  arrayNum.push(num);
  document.getElementById('txtThemSo').innerHTML = HienThiMang(arrayNum);
}
document.getElementById('btnThemSo').addEventListener('click', function () {
  ThemMotSoVaoMang();
});
