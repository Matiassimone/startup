const eventEmitter = class EventEmitter {

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

module.exports = eventEmitter;