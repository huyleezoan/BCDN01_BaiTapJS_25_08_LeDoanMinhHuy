// Bài 2:
/**
 * Mô hình 3 khối:
 * Khối 1: 
 * các số trong mảng
 * Khối 2: 
 * B1: Tạo biến đếm các số dương bằng 0
 * B2: Duyệt mảng với điêu kiện nếu là số là số dương 
 * tức là lơn hơn bằng 0 thì đếm tăng lên 1
 * Khối 3: 
 * Hiển hị số lượng số dương lên giao diện
 */

function DemCoBaoNhieuSoDuuong(){
    var demSoDuong = 0;
    for(var i = 0;i<arrayNum.length;i++){
        if(arrayNum[i]>=0){
            demSoDuong++;
        }
    }
    document.getElementById("txtBai2").innerHTML = demSoDuong;
}
document.getElementById("btnBai2").onclick = DemCoBaoNhieuSoDuuong;