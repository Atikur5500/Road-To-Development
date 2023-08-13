function changeText () {
    const text = document.getElementById('text-change');
    text.innerText = 'I love my country!'
}

document.getElementById('event-handle').addEventListener('click', function(){
    const textChange = document.getElementById('text-change');
    textChange.innerText = 'I Love My Homeland'
})
document.getElementById('one-more').addEventListener('click',function(){
    const change = document.getElementById('text-change');
    change.innerText = 'I love People of my country!'
})

document.getElementById('button-update').addEventListener('click', function(){
   const inputField = document.getElementById('input-field');
   const inputText = inputField.value;

   const text = document.getElementById('default-text');
   text.innerText = inputText;
   inputField.value = '';
   
})