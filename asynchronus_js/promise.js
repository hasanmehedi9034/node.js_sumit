
const  hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const mettingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        }
        resolve(mettingDetails);
    }
    else {
        reject(new Error('Meeting already scheduled'));
    }
}); 

// const addToCalendar = (mettingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.location}`;
//         resolve(calender);
//     })
// }

const addToCalendar = (mettingDetails) => {
        const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;
        return Promise.resolve(calender);
}

const time = (str) => new Promise((resolve, reject) => {
    reject(new Error(str + ' Error from time'))
})

// meeting
//     .then(addToCalendar) // promise
//     .then(time) // promise
//     .then((res) => {
//         console.log(res, ' last resolved');
//     })
//     .catch((err) => {
//         // rejected data
//         console.log(err.message)
//     })


const promise1 = Promise.resolve('Promise 1 resolved');

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promis 2 resolved');
    }, 2000)
})

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))


// return all resolved promise
Promise.all([promise1, promise2])
    .then(res => {
        console.log(res)
    })

// return 1st  resolved promist
Promise.race([promise1, promise2])
    .then(res => {
        console.log(res)
    })








