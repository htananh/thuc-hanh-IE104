function BMI(){
    let kgInput = document.getElementById("kg").value;
    let caoInput = document.getElementById("cao").value;
    let optionInput=document.getElementById("option").value;
    let kq;
    let tinhBMI = {
        kg: kgInput,
        cao: caoInput,
        option: optionInput,

        tinh: function () {
             kq = (this.kg / (this.cao * this.cao)).toFixed(2);
            switch (true) {
                case kq < 18.5:
                    return "Dưới chuẩn";
                case kq >= 18.5 && kq <= 24.9:
                    return "Bình thường";
                case kq >= 25 && kq <= 29.9:
                    return "Thừa cân";
                case kq >= 30 && kq <= 34.9:
                    return "Béo phì cấp độ 1";
                case kq >= 35 && kq <= 39.9:
                    return "Béo phì cấp độ 2";
                case kq >= 40:
                    return "Béo phì cấp độ 3";
                default:
                    return "Không xác định";
            }
        },
        khuyenNghi: function (){
            if(kq >= 30 && kq <= 34.9 && this.option==1)
            {
                return "Khám định kỳ"
            }
            if(kq >= 35 && kq <= 39.9 && this.option==2)
            {
                return "Tập thể dục thường xuyên"
            }
            if(kq >= 40 && this.option==3)
            {
                return "Hạn chế ăn mỡ động vật"
            }
            return "";
        }
    };
    let ketqua=this.kq;
    let result = tinhBMI.tinh();
    let recommendation = tinhBMI.khuyenNghi();
    document.getElementById("ketqua").innerHTML="<h2>Kết quả</h2>" +"<br>"+ "<h1>"+kq+"</h1>" + "<br>" +"<h3>"+result+"</h3>" + "<h3>"+recommendation+"</h3>";

}

let btn=document.getElementById("btn");
btn.addEventListener("click",BMI)
