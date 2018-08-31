var Total = 0;
function giveNow() {
    var inputValue = document.getElementById("input").value;
    var input = document.getElementById("donationLeft");
    var text = input.innerHTML;
    var amountLeft = text-inputValue;
    var count = document.getElementById("count").innerHTML;

    if(inputValue < 0 ){
      alert("Check the amount entered!");
      return;
    }

    Total = parseInt(Total)+parseInt(inputValue);
    document.getElementById("total").innerHTML = Total;
    var amountLeft = text-inputValue;
    if((inputValue >= 1000 )|| (text <= 0) || (amountLeft < 0)){
      document.getElementById("donationLeft").innerHTML=0;
      document.getElementById("coloredBar").style.width = (1000)*0.4+"px";
      document.getElementById("count").innerHTML= ++count;
    }else{
    document.getElementById("donationLeft").innerHTML=amountLeft;
    document.getElementById("coloredBar").style.width = (1000-amountLeft)*0.4+"px";
    document.getElementById("count").innerHTML= ++count;
  }
}

function saveForLater() {
    alert("Saved!")
}
