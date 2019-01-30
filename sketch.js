let inputEncrypt = document.getElementById("encryptInput");
let inputDecrypt = document.getElementById("decryptInput");

let eNum1 = 5;   //Lock
let eNum2 = 14;  //Lock

let dNum1 = 11;  //Key
let dNum2 = 14;  //Key

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function encodeTxt(string) {
    let tempEncodeArr = [];
    let toLowerCase = string.toLowerCase();
    let toArr = toLowerCase.split("");
    for (let i = 0; i < toArr.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (toArr[i] == alphabet[j]) {
                tempEncodeArr.push(j + 1);
            }
        }
    }
    let tempResult = tempEncodeArr.toString();
    let result = tempResult.replace(/,/g, "");
    return result;
}

function encrypt(txtToNum, num1, num2) {
    let encodedMsg = encodeTxt(txtToNum);
    let encrypt = Math.pow(encodedMsg, num1) % num2;
    return encrypt;
}

function decodeTxt(nums) {
    let decode = nums.toString();
    let tempArr = [];
    for (let i = 0; i < decode.length; i++) {
        tempArr.push(alphabet[decode[i] - 1]);
    }
    let tempResult = tempArr.toString();
    console.log(tempResult);
    return tempResult;
}

function decrypt(encryptedMsg, num1, num2) {
    let decrypt1 = Math.pow(encryptedMsg, num1);
    let decrypt2 = decrypt1 / num2;
    let decrypt3 = decrypt2 - Math.floor(decrypt2);
    let decrypt4 = decrypt3 * num2;
    let decrypt5 = Math.ceil(decrypt4);
    document.getElementById("result").innerHTML = decodeTxt(decrypt5);
}

document.getElementById("encryptbtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = encrypt(inputEncrypt.value, eNum1, eNum2);
    
});

document.getElementById("decryptbtn").addEventListener("click", () => {
    decrypt(inputDecrypt.value, dNum1, dNum2);
});

















