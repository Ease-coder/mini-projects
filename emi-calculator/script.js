let form = document.getElementById("form");
let calculator = document.getElementById("calculator");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let form_data = new FormData(form);

    let principal_amt = Number(form_data.get("loan_amt"));
    let roi = Number(form_data.get("int"));
    let year = Number(form_data.get("loan_tenure"));

    // console.log(principal_amt, roi, year);

    let int_amt = principal_amt * roi * year / 100;
    principal_amt += int_amt
    
    tenure = year * 12;
    M_emi = principal_amt / tenure;

    let p = document.createElement("p");
    p.textContent= `
        Your Monthly EMI is ${M_emi.toFixed(2)}.
    `;
    p.classList.add("text-green", "text-[20px]", "p-4");
    calculator.appendChild(p);

});