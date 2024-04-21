import { getRandomActivity } from './activity.js';

function updateActivity(activity) {
    getRandomActivity().then(activity => {
        document.getElementById("activity").textContent = activity;
    }).catch (console.log("Error"));
}

setTimeout(updateActivity(), 5000);