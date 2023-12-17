class Card {
    constructor(suit, value, face) {
        this.suit = suit;
        this.value = value;
        this.face = face;
    }
}



class Game {
    constructor(){
        this.makeDeck();
    }

    makeDeck(){

        let cards = [];
        const suits = ['\u2663', '\u2666', '\u2664', '\u2665'];
        const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    
        // for (let suit of suits) {
        //     let count = 2;
        //     for (let face of faces) {
        //         let card = new Card(suit, faces,
        //             count);
        //             count++;
        //         cards.push(card);
        //     }
        // }
    
    
        for (let x = 0; x < faces.length; x++) {
            for (let i = 0; i < suits.length / 2; i++) {
    
               let card = new Card(faces[x], suits[i], x + 2);
               cards.push(card);
                }
            }
    
            for (let y = cards.length - 1; y > 0; y--) {
                let j = Math.floor(Math.random() * (y + 1));
                let temp = cards[y];
                cards[y] = cards[j];
                cards[j] = temp;
            }
            this.deck = cards;
            
            }

        }
    

    let war = new Game();
    let war2 = new Game();


// class Player {
//     constructor(name) {
//         this.name = name;
//         this.hand = [];
//     }
//   }

//   function addPlayer(name) {
//     const player = new Player(name);
//     players.push(player);
//   }

//   addPlayer("Arthur");
//   addPlayer("John");
