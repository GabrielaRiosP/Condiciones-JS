const digito1 = document.querySelector("#digito1");
const digito2 = document.querySelector("#digito2");
const digito3 = document.querySelector("#digito3");
const BtnIngresar = document.querySelector("#ingresar");
const resultado = document.querySelector(".resultado")



BtnIngresar.addEventListener("click", () => {
    if (digito1.value === "9" && digito2.value === "1" && digito3.value === "1") {
        resultado.innerHTML = "Password 1 correcto";
    }
    else if (digito1.value === "7" && digito2.value === "1" && digito3.value === "4") {
        resultado.innerHTML ="Password 2 correcto";
    }
    else {
        resultado.innerHTML = "Password incorrecto!"; 
    }
})