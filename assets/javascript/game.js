//This is the main javascript file for the crystal collector game.
//There will be four variables to represent the random number values of each of the four crystals.
//There will be a variable to store the randomly generated target value.
//There will be a variable to store the running total.
//There will be two variables to hold num wins and num losses respectively.

$(document).ready(function() {
    var crystalCollector = {
        blueVal : null,
        diamondVal : null,
        redVal : null, 
        yellowVal : null, 
        targetVal : null,
        userTotal : 0,
        numWins : 0,
        numLosses : 0,
        gameOver : false,
    
        generateNumbers : function() {
            this.targetVal = Math.floor(Math.random() * 102) + 19;
            this.blueVal = Math.floor(Math.random() * 12) + 1;
            this.diamondVal = Math.floor(Math.random() * 12) + 1;
            this.redVal = Math.floor(Math.random() * 12) + 1;
            this.yellowVal = Math.floor(Math.random() * 12) + 1;
        },
    
        resetGame : function () {
            this.userTotal = 0;
            $('.user-score').text(this.userTotal);
            this.generateNumbers();
            $(".target-number").text(this.targetVal);
            this.gameOver = false;
            $('.game-over-alert').text('');
            $('.gem').on('click', crystalCollector.clickFunction);
        }, 

        clickFunction : function() {
            if ($(this).attr('id') === 'blue') {
                crystalCollector.userTotal += crystalCollector.blueVal;
                $('.user-score').text(crystalCollector.userTotal);
            }
            else if ($(this).attr('id') === 'diamond') {
                crystalCollector.userTotal += crystalCollector.diamondVal;
                $('.user-score').text(crystalCollector.userTotal);
            }
            else if ($(this).attr('id') === 'red') {
                crystalCollector.userTotal += crystalCollector.redVal;
                $('.user-score').text(crystalCollector.userTotal);
            }
            else if ($(this).attr('id') === 'yellow') {
                crystalCollector.userTotal += crystalCollector.yellowVal;
                $('.user-score').text(crystalCollector.userTotal);
            }
            crystalCollector.checkGameStatus();
        },

        checkGameStatus : function() {
            $('.user-score').text(this.userTotal);
            console.log(this.userTotal); 
            if (this.targetVal === this.userTotal) {
                
                //debugger;
               // alert('you win');
                //this.resetGame();
                this.numWins++;
                $(".num-wins").text(this.numWins);
                this.gameOver = true;
                $('.game-over-alert').text('You win! Press any key to play again.');
                $('.gem').off('click');
            }
            else if (this.userTotal > this.targetVal) {
                //debugger;
                //alert ('you lose');
                //this.resetGame();
                this.numLosses++;
                $(".num-losses").text(this.numLosses);
                this.gameOver = true;
                $('.game-over-alert').text('You Lose! Press any key to play again.');
                $('.gem').off('click');
            }  
        }
    };
    
    crystalCollector.resetGame();
    $('.gem').on('click', crystalCollector.clickFunction);

    $(document).keyup(function() {
        if (crystalCollector.gameOver) {
            crystalCollector.resetGame();
        }
    });
});

