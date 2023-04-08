let h2 = document.write(new Date().getUTCFullYear());
let slash = document.write("/");
let h3 = document.write(1+new Date().getUTCMonth());
let slash2 = document.write("/");
let h4 = document.write(new Date().getUTCDate());

function cambiarTexto() {
    let p = document.getElementById('cambiar');
    if (canChange) {
        p.innerHTML = 'Ahora es otra cosa';
        alert('Apa, te cambié el texto');
        console.log(p.innerHTML);
        canChange = false;
    } else if (canChange != true) {
        p.innerHTML = 'Clickeame';
        alert('Lo único que se hacer es volver al texto anterior');
        console.log(p.innerHTML);
        canChange = true;
    }
}

function change() {
    if (canChange) {
        console.log("El estado del canChange pasó de: " + canChange);
        canChange = false;
        console.log("a valer: " + canChange);
    } else if (!canChange) {
        console.log("El estado del canChange pasó de: " + canChange);
        canChange = true;
        console.log("a valer: " + canChange);
    }
}
