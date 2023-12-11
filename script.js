let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("t")[0];
// New Date() objeto date que recebe atual data ex: Mon Dec 11 2023 12:30:51 GMT-0300 
// .toISOString() retorna a data em string no formado da ISO8601
// split(t) Irá dividir a string em um array toda toda vez que encontra t
// .max Valor máximo permitido para o input, no caso o dia em questão 

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let today = new Date;

    let d2 = today.getDay();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
        d3 = getDaysinMounth(year, month){
            return  new Date(year, month, 0).getDate();
        }
    }
}