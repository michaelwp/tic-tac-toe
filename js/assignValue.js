function transform(buttonId) {
    const btn = document.getElementById(buttonId);
    const ind = document.getElementById("pos");
    const x = document.getElementById("x");
    const o = document.getElementById("o");

    if (data().x.slice(2) !== "win" && data().o.slice(2) !== "win") {
        if (btn.innerHTML === "") {
            btn.innerHTML = ind.value;
            btn.innerHTML === "X" ? btn.style.backgroundColor = "#f58282" : btn.style.backgroundColor = "#a9cff5";
        } else {
            btn.innerHTML = "";
            btn.style.backgroundColor = "#fff";
        }

        if (ind.value === "X") {
            ind.value = "O";
            autoMove();
        } else {
            ind.value = "X";
        }
    }

    if (data().x.slice(2) === "win" || data().o.slice(2) === "win") {
        x.value = data().x.slice(2);
        o.value = data().o.slice(2);
    }

    console.log(data());
}

function reset() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a1").style.backgroundColor = "#fff";

    document.getElementById("a2").innerHTML = "";
    document.getElementById("a2").style.backgroundColor = "#fff";

    document.getElementById("a3").innerHTML = "";
    document.getElementById("a3").style.backgroundColor = "#fff";

    document.getElementById("b1").innerHTML = "";
    document.getElementById("b1").style.backgroundColor = "#fff";

    document.getElementById("b2").innerHTML = "";
    document.getElementById("b2").style.backgroundColor = "#fff";

    document.getElementById("b3").innerHTML = "";
    document.getElementById("b3").style.backgroundColor = "#fff";

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c1").style.backgroundColor = "#fff";

    document.getElementById("c2").innerHTML = "";
    document.getElementById("c2").style.backgroundColor = "#fff";

    document.getElementById("c3").innerHTML = "";
    document.getElementById("c3").style.backgroundColor = "#fff";

    document.getElementById("x").value = "";
    document.getElementById("o").value = "";

    document.getElementById("pos").value = "X";
}