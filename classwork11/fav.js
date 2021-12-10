let favor = JSON.parse(localStorage.getItem('favorites'));
for(let i =0; i<favor.length; i++){
    let block = document.createElement('div');
    block.innerText = `${favor[i].name} ` + `${favor[i].age} ` + `${favor[i].status} `;
    document.body.appendChild(block);
}