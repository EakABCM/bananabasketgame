input.onButtonPressed(Button.A, function () {
    basket.change(LedSpriteProperty.X, -1)
})
// ตั้งชื่อฟังก์ชันเป็น newGame
function newGame () {
    if (life > 0) {
        banana.set(LedSpriteProperty.Y, 0)
        banana.set(LedSpriteProperty.X, randint(0, 4))
        basic.pause(500)
    }
}
input.onButtonPressed(Button.B, function () {
    basket.change(LedSpriteProperty.X, 1)
})
let life = 0
let basket: game.LedSprite = null
let banana: game.LedSprite = null
basic.showString("Banana Game")
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.pause(500)
banana = game.createSprite(randint(0, 4), 4)
basket = game.createSprite(2, 4)
// ตั้งชื่อตัวแปรชีวิตเป็น life
life = 3
game.setScore(0)
basic.pause(500)
basic.forever(function () {
    while (life > 0) {
        banana.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (banana.isTouching(basket)) {
            game.addScore(1)
            newGame()
        } else if (banana.get(LedSpriteProperty.Y) == 4) {
            life += -1
            newGame()
        }
    }
    game.gameOver()
})
