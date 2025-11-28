
const button = document.querySelector(".button");
const container = document.querySelector("#container");

let gridSize = 800;


function buildGrid(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        const grid = document.createElement('div');
        grid.classList.add('box');
        grid.style.width = `${gridSize/cols}px`;
        grid.style.height = `${gridSize/rows}px`;
        container.appendChild(grid);

        
        grid.addEventListener('mouseenter', () => {
            if(!grid.style.backgroundColor){
                const r = Math.floor(Math.random() * 256) + 1;
                const g = Math.floor(Math.random() * 256) + 1;
                const b = Math.floor(Math.random() * 256) + 1;

                grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                grid.style.opacity = 0.3;
            }
            else{
                if(grid.style.opacity < 1){
                    const opacityChange = Number(grid.style.opacity) + 0.1;
                
                    grid.style.opacity = opacityChange
                }
            }
    })}
}



buildGrid(30, 30);

button.addEventListener("click", () => {
    container.innerHTML = '';
    const promptInput = window.prompt('Enter a number from 1 to 100');

    inputToNumber = Number(promptInput);

    if(!inputToNumber || inputToNumber < 1 || inputToNumber > 100){
        window.alert('Enter a valid Number')
        buildGrid(30, 30);
    }
    else{
    buildGrid(inputToNumber, inputToNumber)
    }
}
);

