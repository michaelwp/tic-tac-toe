function data() {
    const input = [
        [
            document.getElementById("a1").innerHTML,
            document.getElementById("a2").innerHTML,
            document.getElementById("a3").innerHTML,
        ],
        [
            document.getElementById("b1").innerHTML,
            document.getElementById("b2").innerHTML,
            document.getElementById("b3").innerHTML,
        ],
        [
            document.getElementById("c1").innerHTML,
            document.getElementById("c2").innerHTML,
            document.getElementById("c3").innerHTML,
        ],
    ];

    return {
        x: horizontal(input, "X"),
        o: horizontal(input, "O")
    };
}