import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";


let wow = document.getElementById("wow");
let time = document.getElementById("time");
let date = document.getElementById("date");


// Update the <text> element with the current time
function updateClock() {
  wow.x = util.getRandomPosition(35,300);
  wow.y = util.getRandomPosition(35,160);
  wow.style.fill = util.getRandomColor();

  var now = new Date();
  time.text = util.formatAMPM(now);
  date.text = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`;
}

// Update the clock every tick event
clock.ontick = () => updateClock();
