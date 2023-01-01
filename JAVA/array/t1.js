
var arr = [1, 'Hello', "red"];

function btn() {
    document.getElementById("demo1").innerHTML = arr[2];
}


var obj = [{ "hemo": "kk", "img": "sex", "id": "1001" },
{ "1": "kk", "img": "sex", "id": "1001" },
{ "hemo": "kk", "img": "sex", "id": "1001" },
];


function btn2() {
    document.getElementById("demo1").innerHTML = obj[1]['1'];
}

