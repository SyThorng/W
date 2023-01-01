Num(val);
function Num(val) {
    document.getElementById("result").value += val;
}
function equal() {
    var input1 = document.getElementById("result").value;
    var output1 = eval(input1);
    document.getElementById("result").value = output1;
}
function cl() {
    document.getElementById("result").value = '';
}