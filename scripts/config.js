function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; //   +'1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOuputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); // '    Max Bajskahd    ' => 'Max Bajskahd'

    if(!enteredPlayername) {//enteredPlayername == ''
        event.target.firstElementChild.classList.add('error');
        errorOuputElement.textContent = 'Please enter a valid name!';
        return;
    }  
    
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

   /* if(editedPlayer === 1){
        players[0].name = enteredPlayername;
    }else{
        players[1].name = enteredPlayername;
    }*/

    players[editedPlayer - 1].name = enteredPlayername;
    

    closePlayerConfig();

}