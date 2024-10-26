// setInterval(function () {
//   const currentTime = clock();
//   // console.log(currentTime);
//   const hour = (document.querySelector(".hourContainer").textContent =
//     currentTime.hour + ":");
//   const minute = (document.querySelector(".minuteContainer").textContent =
//     currentTime.minutes + ":");
//   const second = (document.querySelector(".secondContainer").textContent =
//     currentTime.seconds);
// }, 1000);

// function clock() {
//   const date = new Date();
//   console.log({ date });
//   // const hour = date.getHours().toString();
//   // const minutes = date.getMinutes().toString();
//   const time = {
//     hour: date.getHours().toString(),
//     minutes: date.getMinutes().toString(),
//     seconds: date.getSeconds().toString(),
//   };
//   // const time = `${hour} : ${minutes}`;
//   return time;
// }

setInterval(clock, 1000);

function clock() {
  const date = new Date();
  // console.log({ date });

  // will build out this object with more properties like date, etc. for future use
  const time = {
    militaryHour: date.getHours(),
    regularHour: "",
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  (function timeConversion() {
    if (time.militaryHour > 12) {
      time.regularHour = time.militaryHour - 12;
    } else {
      time.regularHour = time.militaryHour;
    }
  })();

  // Render to hour container
  document.querySelector(".hourContainer").textContent =
    time.regularHour.toString() + ":";
  // Render to minute container
  document.querySelector(".minuteContainer").textContent =
    time.minutes.toString().padStart(2, "0") + ":";
  // Render to seconds container
  document.querySelector(".secondContainer").textContent = time.seconds
    .toString()
    .padStart(2, "0");
}
