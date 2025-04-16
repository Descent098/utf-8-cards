let dealerCards = []
let playerCards = []
let deck = new Deck()

function getHandValues(hand){
    let totalNumber = 0
    let totalValue = 0
    for (const card of hand){
        totalNumber += card.number
        totalValue += card.value
    }
    return [totalNumber, totalValue]
}
function checkBust(hand){
    let [total, _] = getHandValues(hand)
    if (total > 21){
        return true
    }
    return false
}

function hit(hand){
    hand.push(deck.getRandomCard(true))
}

function startGame(){
    let acesHigh = false
    deck = new Deck(acesHigh)

    dealerCards = [deck.getRandomCard(true), deck.getRandomCard(true)]
    playerCards = [deck.getRandomCard(true), deck.getRandomCard(true)]
    
}

function endGame(){
    let t = getHandValues(playerCards)
    playerTotalNumber = t[0]
    playerTotalValue = t[1]
    t = getHandValues(dealerCards)
    dealerTotalNumber = t[0] 
    dealerTotalValue = t[1]
    
    if (checkBust(playerCards) || playerTotalNumber < dealerTotalNumber){
        console.log("You Lose") 
    } else if (playerTotalNumber == dealerTotalNumber){ // Tie
        if (playerTotalValue > dealerTotalValue){
            console.log("You win")
        } else{
            console.log("You Lose")
        }
    } else{
        // dealer Tries to win
        while (dealerTotalNumber <= playerTotalNumber){
            hit(dealerCards)
            t = getHandValues(dealerCards)
            dealerTotalNumber = t[0] 
            dealerTotalValue = t[1]
            
        }
        if (checkBust(dealerCards)){
            console.log("You win")
        } else{
            if (dealerTotalValue >= playerTotalValue ){
                console.log("You Lose")
            } else {
                console.log("You win")
            }
        }
    }
}