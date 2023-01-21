// const {emitter, startPeriod} = require('./school');

/// register a listener for bellRing event
// emitter.on('bellRing', (period) => {
//     console.log(`We need to run! because ${period.text}`);
// })


// raise an event
// emitter.emit('bellRing',  'second period ended');
// emitter.emit('bellRing',  {
//     period: 'first',
//     text: 'period  ended'
// });
// startPeriod();


const School = require('./school')
const school = new School();

// register a listener for belling event
school.on('bellRing', ({period, text}) => {
    console.log(`we need to run because ${period} ${text}`)
})

school.startPeriod()
