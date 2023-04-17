// alert("my script is working")
let no_buttons = Array.from(document.getElementsByClassName("btn"));

let inpEl = document.getElementById("inp")
let EqualToEl = document.getElementsByClassName("equalTo")[0];
let AclearEl = document.getElementsByClassName("Aclear")[0];
let lastDelEl = document.getElementsByClassName("lastDel")[0];


console.log(EqualToEl);

// console.log(no_buttons);

let str = "";
no_buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        // str = str + btn.textContent;
        if (e.target.textContent == "=") {
            inpEl.value = eval(str);
            str = ""+inpEl.value;
        }
        else if (e.target.textContent == "ac") {
            inpEl.value = "";
            str = "";
        }
        else if(e.target.textContent=="c"){
            let n = str.length;
            str=str.slice(0,n-1);
            inpEl.value = ""+str;
        }
        else if(e.target.textContent=="x!"){
            let fact=factorial(str);
            inpEl.value = ""+fact;
            str=""+fact;
        }
        else {
            str = str + e.target.textContent;
            str = str.replaceAll("x", "*");
            inpEl.value = str;
        }


    })

})

function factorial(str){

    let num=Number.parseInt(str);
    let pro=1;
    for(let i=1; i<=num; i++){
        pro=pro*i;
    }
 
   return pro;
}
        // EqualToEl.onclick = () => {
        //     inpEl.value = eval(str);
        //     str = "";
        // }

        // lastDelEl.onclick = () => {
        //     str=inpEl.value
        //     let n = str.length;
        //     inpEl.value = str.slice(0, n - 1);
        // }
        
// AclearEl.onclick = () => {
//     inpEl.value = "";
//     str = "";
// }