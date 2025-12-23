const query= document.querySelector('#query')

const enter=document.querySelector('#enter')


enter.addEventListener('click',(e)=>{
    e.preventDefault()
    check()
})

function check(){
    if(query.value){
        alert(query.value)
    }
    else{
        alert('enter the query')
    }
}