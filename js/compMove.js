const fieldHor = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"]
];

const fieldVer = [
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"]
];

const fieldDig = [
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"],
];

const field = [
    "a1", "a2", "a3",
    "b1", "b2", "b3",
    "c1", "c2", "c3"
];

function autoMove() {
    const horWin = autoChecking("O", fieldHor);
    if (!horWin) {
        const verWin = autoChecking("O", fieldVer);
        if (!verWin) {
            const digWin = autoChecking("O", fieldDig);
            if (!digWin) {
                autoBlock();
            }
        }
    }
}

function autoBlock() {
    const horStat = autoChecking("X", fieldHor);
    if (!horStat) {
        const verStat = autoChecking("X", fieldVer);
        if (!verStat) {
            const digStat = autoChecking("X", fieldDig);
            if (!digStat) {
                autoPos();
            }
        }
    }
}

function autoPos() {
    const horPos = closePos("O", fieldHor);
    if (!horPos) {
        const verPos = closePos("O", fieldVer);
        if (!verPos) {
            const digPos = closePos("O", fieldDig);
            if (!digPos) {
                randomMove();
            }
        }
    }
}

function autoChecking(mark, data) {
    // check position status
    for (let i = 0; i < data.length; i++) {
        let free = "full";
        let opp = 0;
        for (let j = 0; j < data[i].length; j++) {
            if (document.getElementById(data[i][j]).innerHTML === mark) {
                opp++;
            } else if (document.getElementById(data[i][j]).innerHTML === "") {
                free = data[i][j];
            }
        }

        if (free !== "full" && opp === 2) {
            transform(free);
            return true;
        }
    }
    return false;
}

function closePos(mark, data) {
    // set position status
    for (let i = 0; i < data.length; i++) {
        let free = 0;
        let opp = 0;
        let pos = [];
        for (let j = 0; j < data[i].length; j++) {
            if (document.getElementById(data[i][j]).innerHTML === mark) {
                opp++;
            } else if (document.getElementById(data[i][j]).innerHTML === "") {
                free++;
                pos.push(data[i][j]);
            }
        }

        if (free === 2 && opp === 1) {
            transform(pos[0]);
            return true;
        }
    }
    return false;
}

function randomMove() {
    // set random position
    const randPos = Math.round(Math.random() * 8);
    if (document.getElementById(field[randPos]).innerHTML === "") {
        transform(field[randPos]);
        return;
    }
    randomMove();
}