// Bài 5:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Duyệt mảng từ cuối về đầu với điều kiện là số đó chia hết cho 2
 * Nếu thỏa điều kiện đó thì return về giá trị
 * ngược lại không thi trả về -1
 * B2: Nếu trả về -1 thì thông báo mảng ko có giá trị chẵn
 * Ngược lại thì in giá trị chẵn cuối cùng
 * Khối 3:
 * Hiển thị kết quả lên giao diện
 */
function TimSoChanCuoiCung() {
  var giaTri = -1;
  for (var i = arrayNum.length - 1; i >= 0; i--) {
    if (arrayNum[i] % 2 == 0) {
      giaTri = arrayNum[i];
      break;
    }
  }
  var text = '';
  if (giaTri == -1) {
    text = 'Mảng không có số chẵn';
  } else {
    text = giaTri;
  }
  document.getElementById('txtBai5').innerHTML = text;
}
document.getElementById('btnBai5').onclick = TimSoChanCuoiCung;
