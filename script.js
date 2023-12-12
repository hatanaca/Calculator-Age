let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("t")[0];
let result = document.getElementById("result");
// New Date() objeto date que recebe atual data ex: Mon Dec 11 2023 12:30:51 GMT-0300 
// .toISOString() retorna a data em string no formado da ISO8601
// split(t) Irá dividir a string em um array toda toda vez que encontra t
// .max Valor máximo permitido para o input, no caso o dia em questão 

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date;

    let d2 = today.getDay();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    if(birthDate > today){
        alert("Por favor, escolha uma data igual ou anterior à data atual.");
        return false; 
    }
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;        
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
