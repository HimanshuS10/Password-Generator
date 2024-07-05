const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


console.log(document.getElementById("letterOnly").value);

document.getElementById("button-pass").onclick = function pass() {
    let maxNum
    let passwordOne = ""
    let passwordTwo = ""

    let letterPass = document.getElementById("letterOnly").checked
    let bothPass = document.getElementById("both").checked
    if(letterPass){
        maxNum = document.getElementById("myRange").value
        for (let i = 0; i < Number(maxNum); i++) {
            randamNumber1 = Math.floor(Math.random() * 52)
            passwordOne += letters[randamNumber1]
        }
    
        for (let i = 0; i < Number(maxNum); i++) {
            randamNumber2 = Math.floor(Math.random() * 52)
            passwordTwo += letters[randamNumber2]
        }

        document.getElementById("output-1").innerHTML = passwordOne
        document.getElementById("output-2").innerHTML = passwordTwo
    
    } else if (bothPass){
       maxNum = document.getElementById("myRange").value

        for (let i = 0; i < Number(maxNum); i++) {
            randamNumber1 = Math.floor(Math.random() * 91)
            passwordOne += characters[randamNumber1]
        }
    
        for (let i = 0; i < Number(maxNum); i++) {
            randamNumber2 = Math.floor(Math.random() * 91)
            passwordTwo += characters[randamNumber2]
        }    
        document.getElementById("output-1").innerHTML = passwordOne
        document.getElementById("output-2").innerHTML = passwordTwo
    
   
    }

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}