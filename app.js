
/* Q1 */


function Name (){
let firstName = prompt ("Enter your first name")
let lastName = prompt ("Enter your last name")

let fullName = firstName +" "+ lastName


document.getElementById("main").innerHTML = `<h1> Full Name ${fullName} </h1>`

}



/* Q3 */
function index(){
let countryName = prompt ("Enter your word")
let letter = prompt (`Your word is ${countryName} (enter a letter from ${countryName})`)
let checkIndex = 

countryName.indexOf(letter)

console.log(`String:"${countryName} Index of ${letter} : ${checkIndex}`);
document.getElementById("main2").innerHTML = `<h1> String:${countryName} Index of ${letter} : ${checkIndex} </h1>`
}


/* let word = "Hello World"
let convert = word.split("")
let findLetter = "o"


for(var i =0; i<convert.length; i++)
if(convert[i]=== findLetter){
    console.log("find")
} else {
    console.log("not found")
}

console.log(convert[i]); */


/* Q10 */
function upper (){
let city = prompt ("Enter your Word (lowerCase)")
let Upper = city.toLocaleUpperCase(0)
document.getElementById("main3").innerHTML = `<h1> ${Upper} </h1>`
}


/* Q11 */
function capitaleachWord(){
let text = prompt ("Enter a word (Example: ComPUTER)")
let result = text[0].toUpperCase() + text.slice(1).toLowerCase()
document.getElementById("main4").innerHTML = `<h1> ${result} </h1>`

}




/* Q14 */
function find(){
let words = ["cake","apple","cookie","chips","patties"]
let find = prompt ("Enter your text")
let smallLetters = find.toLowerCase()
let index2 = words.indexOf(smallLetters)
let flag = false
for(var i=0; i<words.length; i++){
    if (words[i] === smallLetters){
        flag = true
        break
    
    }
}
        if(flag){
            document.getElementById("main5").innerHTML = `<h1> ${smallLetters} is available at index ${index2} in our bakery </h1>`
} else {
    alert(`We are sorry. ${find} is not available in our bakery`)
}
}



    /* Q16 */

    function stringtoArray(){
    let text1 = prompt ("Enter your Text")
    let convert1 = text1.split("")
    for(var i= 0; i<text1.length; i++)
        console.log(text1[i])
document.getElementById("main6").innerHTML = `<h1> ${convert1}  </h1>`
    }


    /* Q17 */

    function lastIndex (){
    let text3 = prompt ("Enter you Word")
    let textLength = 
        text3.charAt(text3.length-1)
    let result1 = `User input: ${text3}  Last character: ${textLength}`
    document.getElementById("main7").innerHTML = `<h1> ${result1}  </h1>`
    }


    
  /* Q18 */
function count (){
let text4 = "The quick brown fox jumps over the lazy dog the"
let find2 =  prompt ("The quick brown fox jumps over the lazy dog the")
let convert2 = text4.split(" ")
let emp = 0;
for(var i=0; i<convert2.length; i++){
    if (convert2[i].toLowerCase() === find2){
    ++emp;
        document.getElementById("main8").innerHTML = `<h1> word: ${find2} repeat: ${emp}  </h1>`
} 
}
}