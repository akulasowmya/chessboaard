var queen = {};
queen.x = 0;
queen.y = 4;
var count = 0;

function move() {
    var value = "s1 e1";
    var a = value.split(" ");
    console.log(a);
    a.forEach((m) => {
        let step = Number(m.slice(m.length - 1));
        let dir = m.slice(0, m.length - 1);
        changeDirection(dir, step);
        console.log(dir);
    });
    console.log("Queen's current position ->" + board[queen.x][queen.y]);
}

function changeDirection(dir, step) {
    switch (dir) {
        case "N": {
            queen.y = queen.y - step;
            if (queen.y < 0) console.log("out of Boundary");
            else console.log(queen.y);
            break;
        }

        case "S": {
            queen.y = queen.y + step;
            if (queen.y < 0) console.log("Out of Boundary");
            else console.log(queen.y);
            break;
        }

        case "E": {
            queen.x = queen.x - step;
            if (queen.x > 8) console.log("Out of Boundary");
            else console.log(queen.x);
            break;
        }

        case "W": {
            queen.x = queen.x + step;
            if (queen.x > 8) console.log("Out of Boundary");
            else console.log(queen.x);
            break;
        }

        case "NE": {
            queen.x = queen.x + step;
            queen.y = queen.y - step;
            if (queen > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
                console.log("Out of Boundary");
            else console.log(queen.x, queen.y);
            break;
        }

        case "NW": {
            queen.x = queen.x - step;
            queen.y = queen.y - step;
            if (queen > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
                console.log("Out of Boundary");
            else console.log(queen.x, queen.y);
            break;
        }

        case "SE": {
            queen.x = queen.x + step;
            queen.y = queen.y + step;
            if (queen > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
                console.log("Out of Boundary");
            else console.log(queen.x, queen.y);
            break;
        }

        case "SW": {
            queen.x = queen.x - step;
            queen.y = queen.y + step;
            if (queen > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
                console.log("Out of Boundary");
            else console.log(queen.x, queen.y);
            break;
        }
    }
}
var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];
console.log("Queen's current Position ->" + board[1][2]);