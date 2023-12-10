class Character {
    constructor(tag, clan) {
        this.tag = tag;
        this.clan = clan;
    }

    describe() {
        return `${this.tag} joins ${this.clan}.`;
    }
}

class Match {
    constructor(tag) {
        this.tag = tag;
        this.characters = [];
    }

    addCharacter(character) {
        if (character instanceof Character) {
            this.characters.push(character);
        } else {
            throw new error(`You can only add an instance of Character. Argument is not a character: ${character}`);
        }
    }

    describe() {
        return `${this.tag} has ${this.characters.length} characters.`; 
    }
}

class Menu {
    constructor() {
        this.matchs = [];
        this.selectedMatch = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createMatch();
                    break;
                case '2':
                    this.viewMatch();
                    break;
                case '3':
                    this.deleteMatch();
                    break;
                case '4':
                this.displayMatchs();
                break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Bye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Match
        2) View Match
        3) Delete Match
        4) Display All Matchs
        `);
    }

    showMatchMenuOptions(matchInfo) {
        return prompt(`
        0) Back
        1) Create Character
        2) Delete Character
        -------------------
        ${matchInfo}
        `);
    }

    displayMatchs() {

        let matchString = ' ';
        for (let i = 0; i < this.matchs.length; i++) {
            matchString += i + ') ' + this.matchs[i].tag + '\n';
        }

        alert(matchString);
    }

    createMatch() {
        let tag = prompt('Enter the name for the new match:');
        this.matchs.push(new Match(tag));
    }

    viewMatch() {
        let index = prompt('Enter the index of the Match you wish to view:');
        if (index > -1 && index < this.matchs.length) {
            this.selectedMatch = this.matchs[index];
            let description = 'Match Tag: ' + this.selectedMatch.tag + '\n';
            
            for (let i = 0; i < this.selectedMatch.characters.length; i++) {
                description += i + ') ' + this.selectedMatch.characters[i].tag + ' - ' + this.selectedMatch.characters[i].clan + '\n;';
            }

            let selection = this.showMatchMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
            }
        }
    }

    deleteMatch() {
        let index = prompt('Enter the index of the Match you wish to delete:');
        if (index > -1 && index < this.matchs.length) {
            this.matchs.splice(index, 1);
        }
    }

    createCharacter() {
        let tag = prompt('Enter tag for new character:');
        let clan = prompt('Enter clan for new character:');
        this.selectedCrew.character.push(new Character(tag, clan));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you wish to delete:');
        if (index > -1 && index < this.selectedMatch.characters.length) {
            this.selectedMatch.characters.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

