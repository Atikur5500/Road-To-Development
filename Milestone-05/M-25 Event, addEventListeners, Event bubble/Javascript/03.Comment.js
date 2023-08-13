document.getElementById('post-button').addEventListener('click', function(){
    const textField = document.getElementById('text-field');
    const comment = textField.value;
    
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);
    textField.value = '';
})