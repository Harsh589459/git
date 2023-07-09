function submit(){
    let email =document.getElementById("exampleInputEmail1");
    let password =document.getElementById("exampleInputPassword1");
    let warning = document.querySelector('.warning');
   
    
    if(email.value==='' || password.value===''){
            warning.innerHTML='<h3 style="color:red">Fill all the input field</h3>'
    }
    else{
        console.log(email.value)
        console.log(password.value)
        console.log('hello');
        email.value="";
        password.value="";
    }
    

}

const click = document.querySelector('.onClick');
const mouseover= document.querySelector('.mouseOver');
const mouseOut = document.querySelector('.mouseOut');

click.addEventListener('click',(e)=>{
    e.preventDefault();
    click.style.background ='red';

})

mouseover.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    mouseover.style.background ='green';

})
mouseOut.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    mouseOut.style.background ='yellow';

})