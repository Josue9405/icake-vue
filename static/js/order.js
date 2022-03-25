function cakeSelectCheck(cakeSelect)
{
    if(cakeSelect){
        selectedOption = document.getElementById("customCake").value;
        if(selectedOption == cakeSelect.value){
            document.getElementById("pastelPersonalizado").style.display = "grid";
        }
        else{
            document.getElementById("pastelPersonalizado").style.display = "none";
        }
    }
    else{
        document.getElementById("pastelPersonalizado").style.display = "none";
    }
}

function showMessageCake(chekedOption) {
    var divMensaje = document.getElementById("divAdicionalMsg");
    divMensaje.style.display = chekedOption.checked ? "block" : "none";
}