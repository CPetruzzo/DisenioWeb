let nombre = prompt("Buenos días, dime tu nombre (sin puntos ni nada raro):");

alert("Hola "+nombre);

let pregunta = prompt("Cómo estás?");

if (pregunta===("bien" || "Bien" || "bien y vos?")) {
    alert("Que bueno! ahí te abro la página");
}

else if (pregunta!==("bien" || "Bien" || "bien y vos?")){

    let ultimaCosa= prompt("Que lástima, bueno, última cosa antes de acceder a la página... Estás gordit@?");
    if (ultimaCosa===("si" || "Si" || "hecho un puerco" || "hecha una cerda" || "hecha una puerca" || "un poco")){
        alert("no te preocupes, acá te ayudamos!");
    }
    
    else if (ultimaCosa=="") {
        alert("Contestá algo ortiva");
    }

    else if (ultimaCosa!==("si" || "Si" || "hecho un puerco" || "hecha una cerda" || "hecha una puerca" || "un poco")){
        alert("menos mal");
    }

}
