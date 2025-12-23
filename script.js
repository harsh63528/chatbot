// dom manuplation
const query= document.querySelector('#query');

const enter=document.querySelector('#enter');

// eventlistener when any one click send
enter.addEventListener('click',(e)=>{
    e.preventDefault();
    check();
})


// checking the condition is met or not
function check(){

    if(navigator.onLine){
        if(query.value){
        alert(query.value);
    }
    else{
        alert('enter the query');
    }
    }

    else{
        alert('there is no internet');
    }
}

function response(data){
   
}
