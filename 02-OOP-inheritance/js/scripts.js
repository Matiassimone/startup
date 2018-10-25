class EventEmitter {

    constructor() {
        this.events = {};
    }

    on(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);    
    }

    emit(eventName, data) {
        const event = this.events[eventName];

        if (event) {
            event.forEach(callback => {
                callback.call(null, data);
            });
        }
    }

    off(eventName, callback) {

        this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }
}

const MixinSocial = Superclass => class extends Superclass{

    share(friendName) {
        this.logger.log(friendName + " share " + this.title);
    }

    like(friendName) {
        this.logger.log(friendName + " likes " + this.title);
    }
};

class Movie extends MixinSocial( EventEmitter ) {

    constructor(name, year, duration) {
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;
        this.movieCast = [];

        this.logger = new Logger();

        super.on("play-movie", data => {
            this.logger.log(data);
        });

        super.on("pause-movie", data => {
            this.logger.log(data);
        });

        super.on("resume-movie", data => {
            this.logger.log(data);
        });

        super.on("cast-movie", data => {
            this.logger.log(data);
        });
    }

    play() {
        super.emit("play-movie", (this.title + " is beginning !, its duration is " + this.duration + " min..") );
    }

    pause() {
        super.emit("pause-movie", (this.title + " is paused..") );
    }

    resume() {
        super.emit("resume-movie", (this.title + " is resumed..") );
    }

    addCast(cast) {
        
        if (Array.isArray(cast)) {
            this.movieCast = this.movieCast.concat(cast);

        } else {
            this.movieCast.push(cast);
        }
    }

    showCast(){

        let actors = "";

        this.movieCast.forEach((actor) => {
            actors = actors + " -  " + actor.name + " -  ";
        })
        super.emit("cast-movie", (actors) );  
    }
}

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Logger extends EventEmitter {

    constructor() {
        super();
        this.pSelector = document.querySelector('p');
    }

    listen(eventName, callback) {
        super.on(eventName, callback);
    }

    log(info) {
        this.pSelector.innerHTML = info;
    }
}

const terminator = new Movie('Terminator I', 1985, 60);

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
