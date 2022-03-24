/**
 * 8 Concepts Learned (Pick the 8 you used, delete the others):
 * 
 * -Sprites
 * 
 * -Sprite Position (coordinates: x and y)
 * 
 * -Controller (dx) and move mySprite with buttons
 * 
 * -overlap Events / sprite kind
 * 
 * -"Spawning" sprites: create and on created
 * 
 * -random
 * 
 * -Displaying numbers (1, 2, 3) as a string ("123")
 * 
 * -score and life
 * 
 * -countdown
 * 
 * -stay in screen and ghost
 * 
 * -set image
 * 
 * -sprite say
 * 
 * -splash
 * 
 * Key Features (List the Key Features You Will Need For Your Game, replace examples)
 * 
 * - ex. Playable Sprite
 * 
 * - ex. player can move up/down left/right
 * 
 * - ex. player can collide with enemy
 * 
 * - ex. enemy decreases player life
 */
let mySprite = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Player)
