// get the elements 
let fname=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let message=document.getElementById("msg");
let form=document.getElementById('form');
console.log(fname,email,phone,message)

// event handling====
form.addEventListener('submit',handleEvent)

function handleEvent(form){
    form.preventDefault()
    sendMail()
    
}



let object={};
function sendMail(){

       object={
       name:fname.value,
       email:email.value,
       phone:phone.value,
       message:message.value
    }
    const serviceID="service_pm5qyrp";
    const templateID="template_8vi2kn7";
    const serviceID2="service_4fm6ovn";
    const templateID2="template_6885z9o";

emailjs.send(serviceID,templateID,object)
.then(res =>{
    console.log(res)
})
emailjs.send(serviceID2,templateID2,object)
.then(
    res =>{
        fname.value="";
        email.value="";
        phone.value="";
        message.value="";
        console.log(res)
        alert("your message sent successfully")
    }
).catch(
    err=>{console.log(err)
    alert(err)
    }
    )
} 

// let object2={}
// function receiveMail(){
//     object2={
//         name:fname.value,
//         email:email.value,
//     }

//     const serviceID="service_4fm6ovn";
//     const templateID="template_6885z9o";

//     emailjs.send(serviceID,templateID,object)
//     .then(
//         res=>{
//             fname.value=""
//         }
//     )
// }