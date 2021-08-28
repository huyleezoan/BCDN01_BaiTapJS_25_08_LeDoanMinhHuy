// Bài 9
/**
 * Mô hình 3 khối
 * Khối 1:
 * mảng số thực
 * Khối 2:
 * B1: Thêm các số vào mảng và hiển thi
 * B2: Duyệt mảng số thực, tạo biên đếm số nguyên
 * và tạo biến tạm bằng giá trị của chính vị trí khi duyệt trừ cho phần nguyên của nó
 * Nếu tam ==0 thì là số nguyên và đếm tăng lên 1
 * ngược lại thì tạm là số thực
 * B3: KẾt luận bao nhiêu số nguyên trong mảng
 * Nếu đếm bằng 0 thì mảng không tồn tại số nguyên
 * ngược lại thì hiện có bao nhiêu số nguyên
 * Khối 3:
 * Hiển thị kết quả lên giao diện
 */
var arrThuc = [];

function ThemSoThuc() {
  var num = parseFloat(document.getElementById('inputNumThuc').value);
  arrThuc.push(num);
  console.log(arrThuc);
  document.getElementById('txtThemSoThuc').innerHTML = HienThiMang(arrThuc);
}
document.getElementById('btnThemSoThuc').onclick = ThemSoThuc;

function DemSoNguyen() {
  var tam, demSoNguyen;
  tam = demSoNguyen = 0;
  for (var i = 0; i < arrThuc.length; i++) {
    tam = arrThuc[i] - Math.floor(arrThuc[i]);
    if (tam == 0) {
      demSoNguyen++;
    }
  }
  var text = '';
  if (demSoNguyen == 0) {
    text = 'Mảng toàn số thực';
  } else {
    text = demSoNguyen;
  }
  document.getElementById('txtBai9').innerHTML = text;
}
document.getElementById('btnBai9').onclick = DemSoNguyen;
