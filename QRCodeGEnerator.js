let qrText = document.querySelector("#qrText");
let qrImage = document.querySelector("#qrImage");
let imgBox = document.querySelector("#imgBox");
let btn = document.querySelector("button");

function generateQR(){

    if(qrText.value == ""){
        imgBox.style.display= "none";
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },150);
    }else{
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        imgBox.style.display = "block";
    }
}
btn.addEventListener("click",generateQR);
