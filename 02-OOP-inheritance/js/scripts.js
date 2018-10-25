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

    emit(eventName) {
        const event = this.events[eventName];

        if (event) {
            event.forEach(callback => {
                callback.call(this);
            });
        }
    }

    off(eventName, callback) {

        this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }
}

class Movie extends EventEmitter {

    constructor(name, year, duration) {
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;

        this.pSelector = document.querySelector('p');

        super.on("play-movie", function playMovie() {
            this.logActions(this.title + " is beginning !, its duration is " + this.duration);
        })

        super.on("pause-movie", function pauseMovie() {
            this.logActions(this.title + " is paused..");
        })

        super.on("resume-movie", function resumeMovie() {
            this.logActions(this.title + " is resumed..");
        })
    }

    play() {
        super.emit("play-movie");
    }

    pause() {
        super.emit("pause-movie");
    }

    resume() {
        super.emit("resume-movie");
    }

    logActions(actionToLog) {
        this.pSelector.innerHTML = actionToLog;
    }
}

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};


let movie = new Movie('Lord of the Ring', 2005, "2 Hs");
let actor = new Actor('Pepe', 27);