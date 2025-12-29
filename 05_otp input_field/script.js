const input = document.querySelector('.inputs');

input.addEventListener('input', (e) => {

    const target = e.target;
    const val = target.value;

    // console.log(e.target);
    // console.log(target.value);

    if (isNaN(val)) {
        target.value = '';
        return;
    }

    if (val != '') {
        const next = target.nextElementSibling;

        if (next) {
            next.focus();
        }
    }
});


input.addEventListener('keyup', function(evt){
    const target = evt.target;
    const key = evt.key;
    console.log(key);
    if( key === 'Backspace' || key === 'Delete'){
        target.value = '';

        const prev = target.previousElementSibling;
        // console.log(prev);
        if(prev){
            prev.focus();
            return;
        }
    }



});