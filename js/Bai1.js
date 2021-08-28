// Bài 1:
/**
 * Mô hình 3 khối:
 * Khối 1: 
 * các số trong mảng
 * Khối 2: 
 * B1: Tạo biến tổng các số dương bằng 0
 * B2: Duyệt mảng với điêu kiện nếu là số là số dương 
 * tức là lơn hơn bằng 0 thì tổng bằng tổng cộng số vừa thỏa
 * Khối 3: 
 * Hiển thị tổng các số dương lên giao diện
 */

 function TongCacSoDuong(){
    var tong = 0;
    for(var i = 0;i<arrayNum.length;i++){
        if(arrayNum[i]>=0){
            tong+=arrayNum[i];
        }
    }
    if(tong)
    document.getElementById("txtBai1").innerHTML = tong;
}
document.getElementById("btnBai1").onclick = TongCacSoDuong;