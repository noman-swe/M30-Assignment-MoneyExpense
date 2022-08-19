function setStyles(player) {
    console.log(player);
    player.style.backgroundColor = 'lightgreen';
    player.style.padding = '10px';
    player.style.margin = '10px';
    player.style.border = '3px solid green';
    player.style.borderRadius = '13px';
}

const players = document.getElementsByClassName('player');

for (const player of players) {
    setStyles(player);
}

// 
document.getElementById('addBtn').addEventListener('click', function () {
    const players = document.getElementById('players');
    const player = document.createElement('div');
    // player.classList.add('player');
    players.appendChild(player);
    player.innerHTML = `<h4 class="player-name">New Player</h4>
    <p>
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum 
    </p>`;

    setStyles(player);;
});

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'palegreen';
    } else{
        event.target.parentNode.style.backgroundColor = 'tomato';
    }
});