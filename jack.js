let firstCard=14
let secondCard=10
let sum=firstCard+secondCard
let hasblackjack=false
let isAlive=true
let message=""

function stratGAme()
{
if(sum<=20)
{
    message="Do you want to draw new card!"
}
else if(sum===21)
{
message="wohoo you have got black jack!!"
hasblackjack=true
}
else
{
message="you! are out of the game"
isAlive=false
}
alert(message)
}