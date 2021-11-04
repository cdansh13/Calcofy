function darkMode() {
    const cb = document.getElementById('check');
    const ch = document.getElementById('ch');
    const ansh = document.getElementById('ansh');
    console.log(cb.checked);
    if (cb.checked){
    ch.style.color = "white"
    ch.innerHTML= "Disable Dark Mode"
    ansh.style.color = "white"
    let a = document.getElementById('cont');
    let a1 = document.getElementById('cont2');
    let b = document.getElementById('dark');
    let c = document.getElementById('light');
    let d = document.getElementById('btn1').className = "btn btn-outline-light";
    let e = document.getElementById('btn2').className = "btn btn-outline-light";
    let f = document.getElementById('btn3').className = "btn btn-outline-light";
    let g = document.getElementById('btn4').className = "btn btn-outline-light";
    let h = document.getElementById('heading').style.color = "white";
    let i = document.getElementById('Hnum1').style.color = "white";
    let j = document.getElementById('Hnum2').style.color = "white";
    let k = document.getElementById('out').style.color = "white";
    let he1 = document.getElementById('he1').style.color = "white";
    let content = document.getElementById('content').style.color = "white";
    let nav = document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-dark";
    a.style.backgroundColor = 'black';
    a1.style.backgroundColor = 'black';
    b.style.display = 'none';
    c.style.display = 'block';
    }
    else if(cb.checked===false){
        ch.style.color = "black"
        ch.innerHTML= "Enable Dark Mode"
        ansh.style.color = "black"
        let a = document.getElementById('cont');
        let a1 = document.getElementById('cont2');
        let b = document.getElementById('dark');
        let c = document.getElementById('light');
        let d = document.getElementById('btn1').className = "btn btn-outline-dark";
        let e = document.getElementById('btn2').className = "btn btn-outline-dark";
        let f = document.getElementById('btn3').className = "btn btn-outline-dark";
        let g = document.getElementById('btn4').className = "btn btn-outline-dark";
        let h = document.getElementById('heading').style.color = "black";
        let i = document.getElementById('Hnum1').style.color = "black";
        let j = document.getElementById('Hnum2').style.color = "black";
        let k = document.getElementById('out').style.color = "black";
        let he1 = document.getElementById('he1').style.color = "black";
        let content = document.getElementById('content').style.color = "black";
        let nav = document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-light bg-light";
        a.style.backgroundColor = 'white';
        a1.style.backgroundColor = 'white';
        b.style.display = 'none';
        // c.style.display = 'block';
    }
}
function lightMode() {
    location.reload();
}
function about() {
    document.title = "About - Calcofy"
    console.log("hello")
    let l = document.getElementById('cont2').style.display = "block";
    let l1 = document.getElementById('cont').style.display = "none";
    let l2 = document.getElementById('home').className = "nav-link";
    let l3 = document.getElementById('about').className = "nav-link active";

}
function add() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log("(num1+num2")
    let output = num1 + num2;
    out = document.getElementById('out').innerHTML = output;
}
function sub() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log("(num1+num2")
    let output = num1 - num2;
    out = document.getElementById('out').innerHTML = output;
}
function mul() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log("(num1+num2")
    let output = num1 * num2;
    out = document.getElementById('out').innerHTML = output;
}
function div() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log("(num1+num2")
    let output = num1 / num2;
    out = document.getElementById('out').innerHTML = output;
}