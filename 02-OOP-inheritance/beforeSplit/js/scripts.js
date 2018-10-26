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

class Logger {

    constructor() {}

    log(info) {
        console.log(info);
    }
}

const MixinSocial = Superclass => class extends Superclass {

    share(friendName) {
        this.emit("share-social", (friendName + " share " + this.title));
    }

    like(friendName) {
        this.emit("like-social", (friendName + " likes " + this.title));
    }
};

class Movie extends MixinSocial(EventEmitter) {

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

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const logger = new Logger();

const terminator = new Movie('Terminator I', 1985, 60);

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);


terminator.on("play-movie", data => {
    logger.log(data);
});

terminator.on("pause-movie", data => {
    logger.log(data);
});

terminator.on("resume-movie", data => {
    logger.log(data);
});

terminator.on("cast-movie", data => {
    logger.log(data);
});

terminator.on("like-social", data => {
    logger.log(data);
});

terminator.on("share-social", data => {
    logger.log(data);
});

