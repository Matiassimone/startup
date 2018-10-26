const Movie = require ('./models/movie');
const Actor = require ('./models/actor');
const Logger = require ('./logger');


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
