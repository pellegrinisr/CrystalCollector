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
    
        generateNumbers : function() {
            this.targetVal = Math.floor(Math.random() * 102) + 19;
            this.blueVal = Math.floor(Math.random() * 12) + 1;
            this.diamondVal = Math.floor(Math.random() * 12) + 1;
            this.redVal = Math.floor(Math.random() * 12) + 1;
            this.yellowVal = Math.floor(Math.random() * 12) + 1;
        },
    
        resetGame : function() {
            userTotal = 0;
            this.generateNumbers();
            $(".target-number").text(this.targetVal);
        }
    };
    crystalCollector.resetGame();
    
    //event handler for clicking the crystals
    $('.gem').on('click', function(ev) {
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
    });
});

