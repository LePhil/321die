var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
var game = new ex.Engine({
    width: 800,
    height: 600
});
var velocity = 20;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.onInitialize = function (engine) {
        var _this = this;
        _super.prototype.onInitialize.call(this, engine);
        console.log("on init yo");
        game.input.keyboard.on('hold', function (keyHeld) {
            console.log("keydown", keyHeld.key);
            switch (keyHeld.key) {
                case ex.Input.Keys.Up:
                case ex.Input.Keys.W:
                    _this.vel.setTo(_this.vel.x, -velocity);
                    break;
                case ex.Input.Keys.Down:
                case ex.Input.Keys.S:
                    _this.vel.setTo(_this.vel.x, velocity);
                    break;
                case ex.Input.Keys.Left:
                case ex.Input.Keys.A:
                    _this.vel.setTo(-velocity, _this.vel.y);
                    break;
                case ex.Input.Keys.Right:
                case ex.Input.Keys.D:
                    _this.vel.setTo(velocity, _this.vel.y);
                    break;
            }
        });
    };
    Player.prototype.update = function (engine, delta) {
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
    };
    return Player;
}(ex.Actor));
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
var resources = {};
// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}
// uncomment loader after adding resources
game.start().then(function () {
    // start your game!
});
