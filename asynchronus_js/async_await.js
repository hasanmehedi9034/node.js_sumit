
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


const addToCalendar = (mettingDetails) => {
    const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;
    return Promise.resolve(calender);
}


async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calender = await addToCalendar(meetingDetails);
        console.log(calender);
    }
    catch {
        console.log('Something wrong happned');
    }
}


myMeeting();








