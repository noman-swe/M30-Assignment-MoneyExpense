const players = document.getElementsByClassName('player');
for(const player of players){
    console.log(player);
    player.style.backgroundColor = 'pink';
    player.style.padding = '15px';
    player.style.border = '3px solid purple';
    player.style.borderRadius = '10px';
    player.style.margin = '5px';   
    
    // const player2 = player[];
    // player2.style.color = 'blue'; 
    // return player;
}



document.getElementById('add-player').addEventListener('click', function(){
    const players = document.getElementById('players');
    const div = document.createElement('div');
    // div.classList('player').add();
    players.appendChild(div);

    const playerHeading = document.createElement('h4');
    playerHeading.innerText = `Player - `;
    div.appendChild(playerHeading);

    const p = document.createElement('p');
    p.innerText = 'AAAAAAAAAAAAAAA AAAAAAAAA AaaaaaaaaaaaaaaaaVV VVVVVVVV RRRRRRRRR RR RR R RRgjasgjoisagang mdnir ugiertv9euu bevldi0  b9ue0tekj ngkerut0tlsamvkjdhg 084utk ami tomak ei chai tumi keno bujho na!! ogooo!! amr valobashar manush Shanto';
    div.appendChild(p);
});