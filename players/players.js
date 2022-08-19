function setPlayerStyle(player) {
    player.style.backgroundColor = 'pink';
    player.style.padding = '15px';
    player.style.border = '3px solid purple';
    player.style.borderRadius = '10px';
    player.style.margin = '5px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}



document.getElementById('add-player').addEventListener('click', function () {
    const players = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>
    A cow is a domestic animal. Cows are one of the most innocent animals who are very harmless. People keep cows at their homes for various benefits. Cows are four-footed and have a large body. It has two horns, two eyes plus two ears and one nose and a mouth.
    </p>`;
    setPlayerStyle(player);
    players.appendChild(player);
});


document.getElementById('players').addEventListener('click', function(event){
    console.log(event.target.tagName.toLowerCase());
    if( (event.target.tagName.toLowerCase()) == 'div' ){
        event.target.style.backgroundColor = 'lightgreen';
    }
    else{
    event.target.parentNode.style.backgroundColor = 'lightblue';
    }
});