// Bài 3:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * các số trong mảng
 * Khối 2:
 * B1: Tạo biến min và gán giá trị ban đầu là phần tử đầu tiên của mảng
 * B2: Duyệt mảng và so sánh phần tử nào nhỏ hơn min thì thay min bằng phần đó
 * Khối 3:
 * Hiện min lên giao diện
 */
function TimMin(){
    var min = arrayNum[0];
    for(var i = 1;i<arrayNum.length;i++){
        if(min>arrayNum[i]){
            min=arrayNum[i];
        }
    }
    document.getElementById("txtBai3").innerHTML = min;
}
document.getElementById("btnBai3").addEventListener('click',function(){
    TimMin();
})