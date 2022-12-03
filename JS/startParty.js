let y = 0
let color = 1;

function board() {
    let html = ""
    let x = 0;
    while (x < 8) {
        html += `
        <div class="fila">
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox()}"></div>
            <div id="${box()}" onclick="interact(${box(false)})" class="casilla casilla${colorBox(true)}"></div>
        </div>
        `
        x++
    }
    document.getElementById("boardHTML").innerHTML = html
}

function box(bool) {
    if(bool != false) {
        y++
    }
    return y
}

function colorBox(last) {
    if(last) {
        return color
    } else {
        if(color == 1) {
            color++
            return 1
        }
        if(color == 2) {
            color--
            return 2
        }
    }
}

function boardPieces() {
    let arr = []
    arr = [1, 8, 57, 64]
    setPieces(1, arr)
    arr = [2, 7, 58, 63]
    setPieces(2, arr)
    arr = [3, 6, 59, 62]
    setPieces(3, arr)
    arr = [4, 61]
    setPieces(5, arr)
    arr = [5, 60]
    setPieces(4, arr)
    arr = [9, 10, 11, 12, 13, 14, 15, 16, 49, 50, 51, 52, 53, 54 , 55, 56]
    setPieces(6, arr)
}

function setPieces(piece, arr) {
    let half = arr.length / 2
    if(piece == 1) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-rook"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-rook"></i>`
            }
        }
    }
    if(piece == 2) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-knight"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-knight"></i>`
            }
        }
    }
    if(piece == 3) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-bishop"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-bishop"></i>`
            }
        }
    }
    if(piece == 4) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-king"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-king"></i>`
            }
        }
    }
    if(piece == 5) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-queen"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-queen"></i>`
            }
        }
    }
    if(piece == 6) {
        for(let i = 0; i < arr.length; i++) {
            if(i >= half) {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-regular fa-chess-pawn"></i>`
            } else {
                document.getElementById(arr[i]).innerHTML = `<i class="fa-solid fa-chess-pawn"></i>`
            }
        }
    }
}


function start() {
    board();
    boardPieces();

}



