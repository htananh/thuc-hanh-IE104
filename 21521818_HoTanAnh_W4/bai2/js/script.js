
function logData(){
    nameInput = document.getElementById("name").value;
    matheInput = document.getElementById("mathe").value;
    sdtInput = document.getElementById("sdt").value;
    mailInput = document.getElementById("mail").value;
    khachhangInput = document.getElementById("khachhang").value;
    hoadonInput = document.getElementById("hoadon").value;
    let Form={
        Name: nameInput,
        mathe:matheInput,
        sdt:sdtInput,
        mail:mailInput,
        khachhang:khachhangInput,
        hoadon:hoadonInput,
        gui:function(){
            confirm(
                "Họ và tên: " + this.Name +
                "\nMã thẻ: " + this.mathe +
                "\nSố điện thoại: " + this.sdt  +
                "\nE-mail: " + this.mail  +
                "\nLoại khách hàng: " + this.khachhang +
                "\nMã hóa đơn: " + this.hoadon
            );
        }
    }
    Form.gui(); 
}
document.getElementById("btn").addEventListener("click", logData)

