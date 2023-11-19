
function sendData(){
    
    let nameInput = document.getElementById("name").value;
    let titleInput = document.getElementById("title").value;
    let gopyInput = document.getElementById("gopy").value;
    let mailInput = document.getElementById("mail").value;
    let form={
        name:nameInput,
        title:titleInput,
        gopy:gopyInput,
        mail:mailInput,
        send:function(){
            confirm(
                "Họ và tên: " + this.name +
                "\nE-mail: " + this.mail +
                "\ntiltle: " + this.title +
                "\nNội dung góp ý: " + this.gopy 
            );
        }
    }
    form.send();
}
document.getElementById("btn").addEventListener("click", sendData)
