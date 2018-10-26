const MixinSocial = require('./mixSocial.js');
const EventEmitter = require('../eventEmitter');

const movie = class Movie extends MixinSocial(EventEmitter) {

    constructor(name, year, duration) {
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;
        this.movieCast = [];
    }

    play() {
        this.emit("play-movie", (this.title + " is beginning !, its duration is " + this.duration + " min.."));
    }

    pause() {
        this.emit("pause-movie", (this.title + " is paused.."));
    }

    resume() {
        this.emit("resume-movie", (this.title + " is resumed.."));
    }

    addCast(cast) {

        if (Array.isArray(cast)) {
            this.movieCast = this.movieCast.concat(cast);

        } else {
            this.movieCast.push(cast);
        }
    }

    showCast() {

        let actors = "";

        this.movieCast.forEach((actor) => {
            actors = actors + " -  " + actor.name + " -  ";
        })
        super.emit("cast-movie", (actors));
    }
}

module.exports = movie;