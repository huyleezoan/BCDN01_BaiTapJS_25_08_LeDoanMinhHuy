// Bài 10
/**
 * Mô hình 3 khối
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Tạo biến đếm dương và đếm âm
 * B2: Duyệt mảng nếu là số dương thì đếm dương tăng 1 ngược lại thì đếm âm tăng 1
 * B3: So sanh đếm ấm và dương
 * Nếu đếm âm lớn hơn thì âm hơn dương
 * ngược lại nếu dương hơn âm thì dương hơn âm
 * ngược lại thì dương bằng âm
 * Khối 3:
 * Hiển thị kết quả lên UI
 */

function SoSanhSoLuongAmDuong() {
  var demDuong, demAm;
  demAm = demDuong = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] >= 0) demDuong++;
    else demAm++;
  }
  var text = '';
  if (demAm > demDuong) {
    text = 'Số lượng âm lớn hơn';
  } else if (demDuong > demAm) {
    text = 'Số lượng dương lớn hơn';
  } else {
    text = 'Số lượng âm bằng số lượng dương';
  }
  document.getElementById('txtBai10').innerHTML = text;
}
document.getElementById('btnBai10').onclick = SoSanhSoLuongAmDuong;
