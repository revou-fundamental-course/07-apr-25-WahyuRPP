// Welcome Text

let yourName = null;

while (!yourName) {
    yourName = prompt("Please enter your name?");

}
const welcomeEl= document.getElementById("name");
if (welcomeEl) {
    welcomeEl.innerText = `${yourName}`;
}

// Message Us Validate


function validateForm() {
    const nama = document.forms['message-form']['full-name'].value;
    const tanggal = document.forms['message-form']['tanggal-lahir'].value;
    const gender = document.forms['message-form']['gender'].value;
    const pesan = document.forms['message-form']['pesan'].value;

    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        allert("Tidak boleh ada yang kosong");
        return false;
    }
    setNama(nama, tanggal, gender, pesan);
    return false;
}

function setNama(nama, tanggal, gender, pesan) {
    document.getElementById("output-name").innerText = nama;
    document.getElementById("output-tanggal").innerText = tanggal;
    document.getElementById("output-gender").innerText = gender;
    document.getElementById("output-pesan").innerText = pesan;

}
