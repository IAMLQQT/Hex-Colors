document.querySelector(".button").addEventListener("click", () => {
    const hexnumber = ["0", '1', "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexnum = "#";
    let random_index = 0;
    for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * hexnumber.length);
        hexnum += hexnumber[random_index];
    }
    document.querySelector(".body").style.backgroundColor = hexnum;
    document.querySelector("#hex-code").innerText = hexnum;
})