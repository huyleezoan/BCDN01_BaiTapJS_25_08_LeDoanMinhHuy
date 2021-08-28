// Bài 7
/**
 * Mô hình 3 khối
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Sử dụng thuật toán Bubble Sort để xép sếp tăng dần
 * B2: Hiển thị mảng sau khi đã sắp xếp
 * Khối 3:
 * Hiển thị kết quả lên giao diên
 */
function BubbleSortTangDan() {
  for (var i = 0; i < arrayNum.length - 1; i++) {
    for (var j = 0; j < arrayNum.length - 1; j++) {
      if (arrayNum[j] > arrayNum[j + 1]) {
        arrayNum[j] = arrayNum[j] - arrayNum[j + 1];
        arrayNum[j + 1] = arrayNum[j] + arrayNum[j + 1];
        arrayNum[j] = arrayNum[j + 1] - arrayNum[j];
      }
    }
  }
  document.getElementById('txtBai7').innerHTML =
    'Mảng sau khi sắp xếp: <br>' + HienThiMang(arrayNum);
}
document.getElementById('btnBai7').onclick = BubbleSortTangDan;
