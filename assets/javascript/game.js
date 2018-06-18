//This is the main javascript file for the crystal collector game.
//There will be four variables to represent the random number values of each of the four crystals.
//There will be a variable to store the randomly generated target value.
//There will be a variable to store the running total.
//There will be two variables to hold num wins and num losses respectively.

$(document).ready(function() {
    var crystalCollector = {
       //properties
        blueVal : null,
        diamondVal : null,
        redVal : null, 
        yellowVal : null, 
        targetVal : null,
        userTotal : 0,
        numWins : 0,
        numLosses : 0,
        gameOver : false,
        
        //methods

        //this method will generate the 5 random numbers and assign them to the variables
        generateNumbers : function() {
            this.targetVal = Math.floor(Math.random() * 102) + 19;
            this.blueVal = Math.floor(Math.random() * 12) + 1;
            this.diamondVal = Math.floor(Math.random() * 12) + 1;
            this.redVal = Math.floor(Math.random() * 12) + 1;
            this.yellowVal = Math.floor(Math.random() * 12) + 1;
        },
        
        //this method will reset the counter variable and the game display
        resetGame : function () {
            this.userTotal = 0;
            $('.user-score').text(this.userTotal);
            this.generateNumbers();
            $(".target-number").text(this.targetVal);
            this.gameOver = false;
            $('.game-over-alert').text('');
            $('.gem').on('click', crystalCollector.clickFunction);
        }, 

        //function that will be bound to the crystal icons
        //will determine which crystal was clicked and will
        //add the corresponding value to the running total
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

        //function to check user has won, lost, or if the game is still in progress
        checkGameStatus : function() {
            if (this.targetVal === this.userTotal) {
                this.numWins++;
                $(".num-wins").text(this.numWins);
                this.gameOver = true;
                $('.game-over-alert').text('You win! Press any key to play again.');
                $('.gem').off('click');
            }
            else if (this.userTotal > this.targetVal) {
                this.numLosses++;
                $(".num-losses").text(this.numLosses);
                this.gameOver = true;
                $('.game-over-alert').text('You Lose! Press any key to play again.');
                $('.gem').off('click');
            }  
        }
    };
    
    //call the object's resetGame method
    crystalCollector.resetGame();
    
    //bind the click method to the gem class
    //which represents the four crystal icons
    $('.gem').on('click', crystalCollector.clickFunction);

    //even handler for resetting the game after win/loss
    $(document).keyup(function() {
        if (crystalCollector.gameOver) {
            crystalCollector.resetGame();
        }
    });
});

