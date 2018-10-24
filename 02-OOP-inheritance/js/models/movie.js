
export default class Movie {

    constructor(name, year, duration) {
        this.title = name;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log(this.title + " is beginning !, its duration is " + this.duration);
    }

    pause(){
        console.log(this.title + " is paused..");
    }

    resume(){
        console.log(this.title + " is resumed..");
    }
}
