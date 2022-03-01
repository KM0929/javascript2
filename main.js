

function clickbutton(target){
    let result = document.getElementById("result") //メモ１
    let target_value = target.innerHTML;
    let last_result = document.getElementById("result").textContent.slice(-1);

    if (target_value == "AC") {
        result.innerHTML = "0";
    }else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML);
    }else if (target_value == "."){
        if (result.innerHTML.indexOf(".") !== -1) {
            ;
        }
        else if (last_result == "+" || last_result == "-" || last_result == "/" || last_result == "*"){
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
        }
        else {
            result.innerHTML += target_value;
        }
    }else if (target_value == "+"  || target_value == "-" || target_value =="/" || target_value == "*"){
        if (last_result == "+" || last_result == "-" || last_result == "/" || last_result == "*" || last_result == "."){
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
        }
        else {
            result.innerHTML += target_value;
        }
    }else {
        if (result.innerHTML == "0") {
            result.innerHTML = target_value;
        }else{
            result.innerHTML += target_value;
        }
    }

    //メモ
    //1:関数の引数を使用するのは、電卓のボタンの中身（数字）をとってくる必要があるため。
    //targetとしておいて、ボタン側にthisを指定→innerHTMlで変数にし、その後の動作を可能にする。
    
}