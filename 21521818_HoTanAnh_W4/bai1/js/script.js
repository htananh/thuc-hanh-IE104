
   
    let btn = document.getElementById("btn");
    let ketqua = document.getElementById("ketqua");
    let kq;
    // Cách 1
    // btn.addEventListener("click", function() {
    //     if (a.value==0)
    //     {
    //         let kq="Phương trình vô nghiệm";
    //         ketqua.innerHTML=kq;
    //     }
    //     else{
    //         kq=(-b.value/a.value);
    //         ketqua.innerHTML="Nghiệm của x là:"+kq;
    //     }
    // });



    
    // Cách 2
    function giaiPhuongTrinh(){
        let aInput = document.getElementById("a").value;
        let bInput = document.getElementById("b").value;

        let PTB1 = {
            a:parseFloat(aInput),
            b:parseFloat(bInput),
            giaipt: function(){
                if (this.a===0)
                {
                    if (this.b===0){
                        return "Phương trình vô số nghiệm"
                    }else{
    
                        return "Phương trình vô nghiệm";
                      
                    }
                }
                else{
                    kq=(-this.b/this.a);
                    return "Nghiệm của x là:"+kq;
                }
            }
           
        }
        ketqua.innerText=PTB1.giaipt(); 
    }
  
    btn.addEventListener("click", giaiPhuongTrinh)
    


