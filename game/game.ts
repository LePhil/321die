/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />

var game = new ex.Engine({
    width: 800,
    height: 600
});


const velocity = 20;
class Player extends ex.Actor {

    public onInitialize(engine: ex.Engine) {
        super.onInitialize(engine);
        console.log("on init yo");
        game.input.keyboard.on('hold', (keyHeld?: ex.Input.KeyEvent) => {
            console.log("keydown", keyHeld.key);
            switch(keyHeld.key) {
                case ex.Input.Keys.Up :
                case ex.Input.Keys.W :
                    this.vel.setTo(this.vel.x, -velocity);
                    break;
                case ex.Input.Keys.Down :
                case ex.Input.Keys.S :
                    this.vel.setTo(this.vel.x, velocity);
                    break;
                case ex.Input.Keys.Left :
                case ex.Input.Keys.A :
                    this.vel.setTo(-velocity, this.vel.y);
                    break;
                case ex.Input.Keys.Right :
                case ex.Input.Keys.D :
                    this.vel.setTo(velocity, this.vel.y);
                    break;
            }
        });
     }

    public update(engine, delta) {
        if (engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
            //this.vel.setTo(this.vel.x, -velocity);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.A) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
            //this.vel.setTo(-velocity, this.vel.y);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.S) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
            //this.vel.setTo(this.vel.x, velocity);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.D) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
            //this.vel.setTo(velocity, this.vel.y);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
             //this.pos.x += 10;
             this.vel.setTo(velocity, this.vel.y);
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
            //this.pos.x -= 10;
            this.vel.setTo(-velocity, this.vel.y);
       }
       console.log(this.vel);
    }
}

console.log("instantiating...");
var paddle = new Player(150, game.drawHeight - 40, 200, 20);

paddle.color = ex.Color.Chartreuse;

paddle.collisionType = ex.CollisionType.Fixed;

game.add(paddle);

/*
game.input.pointers.primary.on('move', function (evt) {
    paddle.pos.x = evt.x;
});

if (game.input.keyboard.wasPressed(ex.Input.Keys.Right)) {
    player._fire();
}

*/


// create an asset loader
var loader = new ex.Loader();
var resources = {

    /* include resources here */
    //txPlayer: new ex.Texture("assets/tex/player.png")

};

// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}

// uncomment loader after adding resources
game.start(/* loader */).then(() => {

    // start your game!

});