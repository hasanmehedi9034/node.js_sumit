const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');

        // raise an event
        this.emit('bellRing', {
            period: 'first',
            text: 'class ended'
        })
    }
}

module.exports = School;
 
