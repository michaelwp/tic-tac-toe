function horizontal(pos, xo, stat = "") {
    // check xo pos horizontal
    for (let p = 0; p < pos.length; p++) {
        let win = true;
        for (let n = 0; n < pos[p].length; n++) {
            if (pos[p][n] !== xo) {
                win = false;
            }
        }
        if (win) {
            return xo + " win";
        }
    }
    if (stat === "") {
        return vertical(pos, xo);
    } else if (stat === "vertical") {
        return diagonal(pos, xo);
    } else {
        return xo + " lose";
    }
}

function vertical(pos, xo) {
    // check xo pos vertical
    const newPos = [];
    for (let p = 0; p < pos.length; p++) {
        const newItem = [];
        for (let n = 0; n < pos[p].length; n++) {
            newItem.push(pos[n][p]);
        }
        newPos.push(newItem);
    }
    return (horizontal(newPos, xo, "vertical"));
}

function diagonal(pos, xo) {
    // check xo pos diagonal
    const newPos = [];
    let newItem = [];
    let p = 0;
    for (let n = 0; n < pos.length; n++) {
        newItem.push(pos[n][p++]);
    }
    newPos.push(newItem);

    newItem = [];
    p = (pos.length - 1);
    for (let n = 0; n < pos.length; n++) {
        newItem.push(pos[n][p--]);
    }
    newPos.push(newItem);
    return (horizontal(newPos, xo, "diagonal"));
}

module.exports = horizontal;
