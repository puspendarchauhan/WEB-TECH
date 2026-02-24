// const student = {
//     name: "akash",
//     age: 20,
//     city:"ghaziabd"
// }
// function showStudent(name,age,city){
//     console.log("name: ", name)
//     console.log("age: ", age)
//     console.log("city: ", city)
// }
// showStudent(student) // here we pass the object into the function
const student= {
    name:"rajat",
    course:"webd",
    address:"delhi",
     marks :{
        hindi:78,
        maths:89,
        english:90
     },
       admissionStatus:"confirmed",
    id:2024011
}
function displayData({name,course,address,marks, admissionStatus,id}){
    console.log("name:", name)
    console.log("course:", course)
    console.log("address:", address)
    console.log(" The average marks of student:", (marks.hindi+ marks.maths+marks.english)/3)
    let averagemarks = (marks.hindi+ marks.maths+marks.english)/3
    if(averagemarks >= 80 && admissionStatus === "confirmed"){
        console.log(" the student is elegible for merit scholarship")
    }

    console.log("admissionStatus:", admissionStatus)
    console.log("id:", id)
}
displayData(student)