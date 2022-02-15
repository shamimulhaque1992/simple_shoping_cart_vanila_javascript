function valueUp(prod, isincr, price_id, price) {
    let current_quent = document.getElementById(prod + "-inp");
    let current_quent_val = parseInt(current_quent.value);
    if (isincr == true) {
        current_quent_val = current_quent_val + 1;
    }
    else if (current_quent_val > 0 && isincr == false) {
        current_quent_val = current_quent_val - 1;
    }
     current_quent.value = current_quent_val;


    const unit_prev_pric = document.getElementById(price_id + "-un-pr");
    unit_prev_pric.innerText = current_quent_val * price;
}

function finalCalculation(prod1, prod2, sub_id, tax_id, total_id,  tax){
    const phon_price = parseInt(document.getElementById(prod1 + "-un-pr").innerText);
    const case_price = parseInt(document.getElementById(prod2 + "-un-pr").innerText);

    const subtotal =  phon_price + case_price;

    document.getElementById(sub_id).innerText = subtotal;

    const calculated_tax = document.getElementById(tax_id).innerText = subtotal / tax;
    document.getElementById(total_id).innerText = calculated_tax + subtotal;
}

function clear_alert(total_id, prod1, prod2, prod1_unp, prod2_unp, subt, tax) {
    const total_pr = document.getElementById(total_id).innerText;
    alert("You have to pay ৳"+ total_pr +" BDT")
    document.getElementById(prod1 + "-inp").value = 0;
    document.getElementById(prod2 + "-inp").value = 0;
    document.getElementById(prod1_unp + "-un-pr").innerText = 0;
    document.getElementById(prod2_unp + "-un-pr").innerText = 0;
    document.getElementById(subt).innerText = 0;
    document.getElementById(tax).innerText = 0;
    document.getElementById(total_id).innerText = 0;
}



document.getElementById("iphon_plus").addEventListener("click", function () {
    valueUp("iphon", true, "ip", 219);
    finalCalculation("ip", "cs", "subtotal", "tax", "total", 10)
})
document.getElementById("iphon_minus").addEventListener("click", function () {
    valueUp("iphon", false, "ip", 219);
    finalCalculation("ip", "cs", "subtotal", "tax", "total", 10)
})
document.getElementById("case_plus").addEventListener("click", function () {
    valueUp("case", true, "cs", 59);
    finalCalculation("ip", "cs", "subtotal", "tax", "total", 10)
})
document.getElementById("case_minus").addEventListener("click", function () {
    valueUp("case", false, "cs", 59);
    finalCalculation("ip", "cs", "subtotal", "tax", "total", 10)
})
document.getElementById("checkout").addEventListener("click", function () {
    clear_alert("total", "iphon", "case", "ip", "cs", "subtotal", "tax")
})