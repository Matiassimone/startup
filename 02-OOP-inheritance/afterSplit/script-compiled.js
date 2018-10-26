"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(eventName, callback) {

            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }

            this.events[eventName].push(callback);
        }
    }, {
        key: "emit",
        value: function emit(eventName, data) {
            var event = this.events[eventName];

            if (event) {
                event.forEach(function (callback) {
                    callback.call(null, data);
                });
            }
        }
    }, {
        key: "off",
        value: function off(eventName, callback) {

            this.events[eventName] = this.events[eventName].filter(function (eventCallback) {
                return callback !== eventCallback;
            });
        }
    }]);

    return EventEmitter;
}();

module.exports = eventEmitter;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log(info);
        }
    }]);

    return Logger;
}();

module.exports = logger;
'use strict';

var Movie = require('./models/movie');
var Actor = require('./models/actor');
var Logger = require('./logger');

var logger = new Logger();

var terminator = new Movie('Terminator I', 1985, 60);

var arnold = new Actor('Arnold Schwarzenegger', 50);
var actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play-movie", function (data) {
    logger.log(data);
});

terminator.on("pause-movie", function (data) {
    logger.log(data);
});

terminator.on("resume-movie", function (data) {
    logger.log(data);
});

terminator.on("cast-movie", function (data) {
    logger.log(data);
});

terminator.on("like-social", function (data) {
    logger.log(data);
});

terminator.on("share-social", function (data) {
    logger.log(data);
});
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

module.exports = actor;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixinSocial = function MixinSocial(Superclass) {
    return function (_Superclass) {
        _inherits(_class, _Superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "share",
            value: function share(friendName) {
                this.emit("share-social", friendName + " share " + this.title);
            }
        }, {
            key: "like",
            value: function like(friendName) {
                this.emit("like-social", friendName + " likes " + this.title);
            }
        }]);

        return _class;
    }(Superclass);
};

module.exports = MixinSocial;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixinSocial = require('./mixSocial.js');
var EventEmitter = require('../eventEmitter');

var movie = function (_MixinSocial) {
    _inherits(Movie, _MixinSocial);

    function Movie(name, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = name;
        _this.year = year;
        _this.duration = duration;
        _this.movieCast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            this.emit("play-movie", this.title + " is beginning !, its duration is " + this.duration + " min..");
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.emit("pause-movie", this.title + " is paused..");
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit("resume-movie", this.title + " is resumed..");
        }
    }, {
        key: 'addCast',
        value: function addCast(cast) {

            if (Array.isArray(cast)) {
                this.movieCast = this.movieCast.concat(cast);
            } else {
                this.movieCast.push(cast);
            }
        }
    }, {
        key: 'showCast',
        value: function showCast() {

            var actors = "";

            this.movieCast.forEach(function (actor) {
                actors = actors + " -  " + actor.name + " -  ";
            });
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, "cast-movie", actors);
        }
    }]);

    return Movie;
}(MixinSocial(EventEmitter));

module.exports = movie;
