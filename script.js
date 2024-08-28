function addStudent(name ,grade){
  const studentEl=document.createElement("div");  //creation of a element div
  studentEl.className= "student";  // adding attribute class with name student to studentEl div element
  const textStudentNode=document.createTextNode(`${name} , ${grade}`);   // creating text node with those valuse
  studentEl.appendChild(textStudentNode); // appending the text node child to the studentEl div element
  
 const containerEl= document.getElementById("studentList"); // getting studentList element id into container to add div element to dom

 let beforeNode=null; //declaring before node
 //loop through existing students  to find the correct position for new students
 for(const child of containerEl.children){
     const childGrade=parseInt(child.textContent.split(":")[1]); // first it splits textcontent according to ":" and then chooses second string (which is grade) and then converts into int
     if(grade<childGrade){  //checks the grade with childGrade , if  it is less than childGrade , store the current child node in beforeNode and breaks the loop
    beforeNode=child;
    break;
     }
}
  containerEl.insertBefore(studentEl,beforeNode) ; // inserting the studentEL before the beforeNOde
}
addStudent("Sashank","95");
addStudent("nithin","94");
addStudent("Govind","49");


const displayMessage= () => {
  console.log("This msg will be displayed in 10sec");
}
const timeoutID=setInterval(displayMessage,1000);
console.log(timeoutID);
