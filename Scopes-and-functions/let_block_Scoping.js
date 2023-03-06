var teacher = "Sanket"; // global scope
function fun() { // global scope
    var teacher = "Pulkit"; // fun scope
    let content = "JS"; //  
    if (content == "JS") {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}
fun();
console.log(teacher);
console.log(content);
