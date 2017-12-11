import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
let myLabel = document.getElementById("myLabel");
let wow = document.getElementById("wow");

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());

  myLabel.text = `${hours}:${mins}`;
  
  wow.x = util.getRandomPosition(35,300);
  wow.y = util.getRandomPosition(35,160);
  wow.style.fill = util.getRandomColor();
}

// Update the clock every tick event
clock.ontick = () => updateClock();
