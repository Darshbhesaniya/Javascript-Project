const btn = document.querySelectorAll("button");
const inputfield = document.querySelector("#result");
inputfield.readOnly = true;


btn.forEach(buttons => {
    buttons.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target)
        console.log(e.target.innerHTML);
        // console.log(e.target.id);

    const key = e.target.innerHTML;        
       

        if (key === 'C') {
         clearResult();
        }
        else if(key === '='){
            calculateResult();
        }
        else{
           appendValue(key);
        }
    })

});


function clearResult(){
    inputfield.value = '';
}

function calculateResult(){
   try {
    inputfield.value = eval(inputfield.value);
   } catch {
inputfield.value = 'error';
   }
    
}
function appendValue(value){
    inputfield.value += value;
}


