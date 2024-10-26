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
  const time = {
    hour: date.getHours().toString(),
    minutes: date.getMinutes().toString(),
    seconds: date.getSeconds().toString(),
  };
  const militaryTime = date.getHours().toString();
  let regularTime = "";
  // const regularTime = militaryTime - 12;
  (function timeConversion() {
    if (Number(militaryTime) > 12) {
      regularTime = militaryTime.toString() - 12;
    } else {
      regularTime = militaryTime;
    }
  })();
  document.querySelector(".hourContainer").textContent = regularTime + ":";
  document.querySelector(".minuteContainer").textContent =
    date.getMinutes().toString().padStart(2, "0") + ":";
  document.querySelector(".secondContainer").textContent = date
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
