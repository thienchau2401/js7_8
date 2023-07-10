var arrNumber = [];
document.getElementById("btnThemSo").onclick = function() {
    var n = document.getElementById("txtSoNguyen").value * 1;
    arrNumber.push(n);
    document.getElementById("hienThiArray").innerHTML = arrNumber;
    document.getElementById("txtSoNguyen").value = '';
}

//Bai 1 
document.getElementById("btnBai1").onclick = function() {
    var sum = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            sum += arrNumber[i];
        }
    }
    document.getElementById('kQBai1').innerHTML = `Tổng các số dương trong mảng : ${sum}`;
}

//Bai 2 
document.getElementById("btnBai2").onclick = function() {
    var count = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            count++;
        }
    }
    document.getElementById('kQBai2').innerHTML = `Số dương : ${count} số`;
}

//Bai 3 
document.getElementById("btnBai3").onclick = function() {
    var min = arrNumber[0];
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < min) {
            min = arrNumber[i];
        }
    }
    document.getElementById('kQBai3').innerHTML = `Số nhỏ nhất : ${min}`;
}

//Bai 4 
document.getElementById("btnBai4").onclick = function() {
    var min = -1;
    var j = 0;
    for (j; j < arrNumber.length; j++){
        if (arrNumber[j] > 0) {
            min = arrNumber[j];
            break;
        }
    }
    if (min > 0) {
        for (var i = j + 1; i < arrNumber.length; i++) {
            if (arrNumber[i] < min && arrNumber[i] > 0) {
                min = arrNumber[i];
            }
        }
        document.getElementById('kQBai4').innerHTML = `Số dương nhỏ nhất : ${min}`;
    } else {
        document.getElementById('kQBai4').innerHTML = 'Không tồn tại số nguyên dương trong mảng';
    }   
}

//Bai 5 
document.getElementById("btnBai5").onclick = function() {
    var even = 1;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 == 0) {
            even = arrNumber[i];
        }
    }
    if (even == 1) {
        document.getElementById('kQBai5').innerHTML = 'Mảng không có phần tử số chẵn!';
    } else {
        document.getElementById('kQBai5').innerHTML = `Số chẵn cuối cùng : ${even}`;
    }
}

//Bai 6 
document.getElementById("btnBai6").onclick = function() {
    var viTri1 = document.getElementById('txtViTri1').value;
    var viTri2 = document.getElementById('txtViTri2').value;
    var resultArray = arrNumber;
    [resultArray[viTri1],resultArray[viTri2]] = [resultArray[viTri2],resultArray[viTri1]];
    document.getElementById('kQBai6').innerHTML = `Mảng sau khi đổi chổ : ${resultArray}`;
}

//Bai 7
document.getElementById("btnBai7").onclick = function() {
    var resultArray = arrNumber;
    for (var i = 0; i < resultArray.length - 1; i++) {
        for(var j = i + 1; j < resultArray.length; j++) {
            if (resultArray[i] > resultArray[j]) {
                [resultArray[i],resultArray[j]] = [resultArray[j],resultArray[i]];
            }
        }
    }
    document.getElementById('kQBai7').innerHTML = `Mảng sau khi được sắp xếp : ${resultArray}`;
}
//Bai 8
function isPrime(x) {
    if (x < 2) {
        return false;
    } else if(x == 2) {
        return true;
    } else {
        for (var i = 2; i <= Math.sqrt(x); i++ ) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }
}

document.getElementById("btnBai8").onclick = function() {
    for (var i = 0; i < arrNumber.length; i++) {
        if(isPrime(arrNumber[i])) {
            document.getElementById('kQBai8').innerHTML = `Số nguyên tố đầu tiên trong mảng : ${arrNumber[i]}`;
            return;
        }
    }
    document.getElementById('kQBai8').innerHTML = 'Không tồn tại số nguyên tố trong mảng';
}

//Bai 9
var arr = [];
document.getElementById('btnNhapSo').onclick = function() {
    var n = document.getElementById("txtNhapSo").value * 1;
    arr.push(n);
    document.getElementById("txtArray").innerHTML = arr;
    document.getElementById("txtNhapSo").value = '';
}
document.getElementById('btnBai9').onclick = function() {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            count++;
        }
    }
    document.getElementById('kQBai9').innerHTML = `Số nguyên có trong mảng : ${count}`;
}
 //Bai 10
document.getElementById('btnBai10').onclick = function() {
    var countAm = 0;
    var countDuong = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > 0) {
            countDuong++;
        } else if(arrNumber[i] < 0) {
            countAm++;
        }
    }
    var compare;
    if(countDuong > countAm) {
        compare = ">";
    } else if (countDuong == countAm) {
        compare = "=";
    } else {
        compare = "<";
    }
    document.getElementById('kQBai10').innerHTML = `Số dương ${compare} Số âm!`;
}