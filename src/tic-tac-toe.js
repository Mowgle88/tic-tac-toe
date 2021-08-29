class TicTacToe {
    constructor() {

        this.firstPlayer = 'x';
        this.secondPlayer = 'o';

        this.currentPlayer = this.firstPlayer;

        this.nextPlayer = {
            [this.firstPlayer]: this.secondPlayer,
            [this.secondPlayer]: this.firstPlayer,
        }

        this.myField = [
            [null, null, null], 
            [null, null, null], 
            [null, null, null]
        ];
        
        this.combo = [
            '00 01 02',
            '10 11 12',
            '20 21 22',
            '00 10 20',
            '01 11 21',
            '02 12 22',
            '00 11 22',
            '02 11 20'
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.myField[rowIndex][columnIndex] != null) {
            return;
        }
        this.myField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.nextPlayer[this.currentPlayer];

        return this.isFinished();
    }

    isFinished() {

        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {

        

    }

    noMoreTurns() {

        let res = 0;

	    for(let i = 0; i < this.myField.length; i++) {
		    let row = this.myField[i];
		    for(let j = 0; j < row.length; j++) {
			    if(this.myField[j][i] !== null) {
				    res++;
			    }
		    }
	    }

	    return (res === 9) ? true : false;
    }

    isDraw() {

        return (!this.getWinner() && this.noMoreTurns()) ? true : false;

    }

    getFieldValue(rowIndex, colIndex) {

        return (this.myField[rowIndex][colIndex] === null) ? null : this.myField[rowIndex][colIndex];

        // return this.myField[rowIndex][colIndex] ? this.myField[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
