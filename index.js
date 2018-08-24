function giveNow() {
    var value = (document.getElementById("input").value.slice(1) * 0.4) + 'px';
    document.getElementById("coloredBar").style.width = value;
}

function saveForLater() {
    alert("Saved!")
}
