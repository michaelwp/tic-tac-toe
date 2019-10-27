const xColor = "red"; //"#f58282";
const oColor = "#4194f2";
const nColor = "#ffffff";

const ind = document.getElementById("pos");
const x = document.getElementById("x");
const o = document.getElementById("o");

const com = document.getElementById("com");

function transform(buttonId, history = false) {
    const btn = document.getElementById(buttonId);
    let compStep = "";

    if (data().x.slice(2) !== "win" && data().o.slice(2) !== "win") {
        if (btn.innerHTML === "") {
            btn.innerHTML = ind.value;
            btn.innerHTML === "X" ? btn.style.color = xColor : btn.style.color = oColor;
        } else {
            return;
        }

        const nextTurn = indChange(btn.innerHTML);
        if (nextTurn === "X") {
            x.value = buttonId;
            if (!history) o.value = "";
            if (com.checked && !history) {
                compStep = autoMove();
            }
        } else {
            o.value = buttonId;
        }
    }

    if (data().x.slice(2) === "win" || data().o.slice(2) === "win") {
        x.value = data().x.slice(2);
        o.value = data().o.slice(2);
        return;
    }
    if (!history) {
        console.log({x: x.value, o: o.value});
        console.log(data());
    }
}

function indChange(mark) {
    if (mark === "X") {
        ind.value = "O";
        ind.style.color = oColor;
        return "X";
    } else {
        ind.value = "X";
        ind.style.color = xColor;
    }
    return "O";
}

function historyMove(move) {
    let posValue = x.value;
    let mark = "O";

    if (posValue !== "lose" && posValue !== "win") {
        if (move === "undo" && document.getElementById(x.value).innerHTML !== "") {
            if (o.value !== "" && document.getElementById(o.value).innerHTML !== "") {
                posValue = o.value;
                mark = "X";
            }
            document.getElementById(posValue).innerHTML = "";
            document.getElementById(posValue).style.color = nColor;
            indChange(mark);
        }

        if (document.getElementById(x.value).innerHTML !== "") {
            if (com.checked) historyMove(move);
        }
    }
}