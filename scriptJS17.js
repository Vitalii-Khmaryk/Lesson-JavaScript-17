setInterval(() => {
  let dd = new Date();
  let hh = dd.getHours();
  let mm = dd.getMinutes();
  let ss = dd.getSeconds();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  document.querySelector(".top-block-hh").innerHTML = `${hh} : ${mm} : ${ss}`;
});

setInterval(() => {
  let nD = new Date();
  let getD = nD.getDate();
  let getM = nD.getMonth();
  if (getM == 0) {
    getM = getM + "1";
  } else {
    getM = "0" + getM + 1;
  }
  let getY = nD.getFullYear();
  document.querySelector(".top-block-dd").innerHTML = `${getD}.${getM}.${getY}`;
});

const hourElem = document.querySelector(".hour");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");
const millisecondElem = document.querySelector(".millisecond");
let hour = 00,
  minute = 00,
  second = 00,
  millisecond = 00,
  interval;

const startButton = document.querySelector(".btn1");
const loopButton = document.querySelector(".btn2");
const stopButton = document.querySelector(".btn3");
const resetButton = document.querySelector(".btn4");

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  document.querySelector(".btn1").classList.add("shadow");
  document.querySelector(".btn2").classList.remove("shadow");
  document.querySelector(".btn3").classList.remove("shadow");
  document.querySelector(".btn4").classList.remove("shadow");
});
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  document.querySelector(".btn1").classList.remove("shadow");
  document.querySelector(".btn2").classList.remove("shadow");
  document.querySelector(".btn3").classList.add("shadow");
  document.querySelector(".btn4").classList.remove("shadow");
});

loopButton.addEventListener("click", () => {
  document.querySelector(".btn2").classList.add("shadow");
  document.querySelector(".btn1").classList.remove("shadow");
  document.querySelector(".btn3").classList.remove("shadow");
  document.querySelector(".btn4").classList.remove("shadow");
  document.querySelector(".area").innerHTML += `${
    document.querySelector(".secondmir").innerHTML
  }`;
  if (document.querySelector(".area").children.length === 9) {
    loopButton.disabled = true;
    loopButton.style.backgroundColor = "rgb(44, 44, 44)";
  } else {
    loopButton.disabled = false;
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  interval;
  hourElem.textContent = "00";
  minuteElem.textContent = "00";
  secondElem.textContent = "00";
  millisecondElem.textContent = "00";
  document.querySelector(".btn1").classList.remove("shadow");
  document.querySelector(".btn2").classList.remove("shadow");
  document.querySelector(".btn3").classList.remove("shadow");
  document.querySelector(".btn4").classList.add("shadow");
  document.querySelector(".area").innerHTML = "";
  loopButton.disabled = false;
  loopButton.style.backgroundColor = "black";
});

function startTimer() {
  millisecond++;
  if (millisecond < 9) {
    console.log("менше 9");
    millisecondElem.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondElem.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    console.log("99 Item yes");
    secondElem.innerText = "0" + second;
    millisecond = 0;
    millisecondElem.innerText = "0" + millisecond;
  }

  if (second < 9) {
    secondElem.innerText = "0" + second;
  }
  if (second > 9) {
    secondElem.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElem.innerText = "0" + minute;
    second = 0;
    secondElem.innerText = "0" + second;
  }

  if (minute < 9) {
    minuteElem.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElem.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElem.innerText = "0" + hour;
    minute = 0;
    minuteElem.innerText = "0" + minute;
  }
}

document.querySelector(".btn-plus").addEventListener("click", () => {
  document.getElementById("inp25").value =
    +document.getElementById("inp25").value + 1;
  document.querySelector(".btn-plus").classList.add("shadow");
  let input25 = +document.getElementById("inp25").value;
  let time = input25 * 60;
  console.log(time);
  let timeOut;
  document.querySelector(".btn5").addEventListener("click", () => {
    timeOut = setInterval(mainTimers, 1000);
    document.querySelector(".btn5").disabled = true;
  });
  document.querySelector(".btn6").addEventListener("click", () => {
    clearInterval(timeOut);
    document.querySelector(".btn5").disabled = false;
  });
  document.querySelector(".btn7").addEventListener("click", () => {
    clearInterval(timeOut);
    let minutes = 0;
    let seconds = 0;
    document.querySelector(".vidlik").innerHTML = "00:00";
    document.querySelector(".btn5").disabled = false;
  });
  function mainTimers() {
    if (time < 0) {
      clearInterval(timeOut);
      window.location.reload();
    } else {
      let minutes = Math.floor(time / 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.querySelector(".vidlik").innerHTML = `${minutes} : ${seconds}`;
      time--;
    }
  }
});
document.querySelector(".btn-plus").addEventListener("mouseout", () => {
  document.querySelector(".btn-plus").classList.remove("shadow");
});
document.querySelector(".btn-minus").addEventListener("click", () => {
  document.getElementById("inp25").value =
    +document.getElementById("inp25").value - 1;
  document.querySelector(".btn-minus").classList.add("shadow");
  let input25 = +document.getElementById("inp25").value;
  let time = input25 * 60;
  console.log(time);
  let timeOut;
  document.querySelector(".btn5").addEventListener("click", () => {
    timeOut = setInterval(mainTimers, 1000);
    document.querySelector(".btn5").disabled = true;
  });
  document.querySelector(".btn6").addEventListener("click", () => {
    clearInterval(timeOut);
    document.querySelector(".btn5").disabled = false;
  });
  document.querySelector(".btn7").addEventListener("click", () => {
    clearInterval(timeOut);
    let minutes = 0;
    let seconds = 0;
    document.querySelector(".vidlik").innerHTML = "00:00";
    document.querySelector(".btn5").disabled = false;
  });
  function mainTimers() {
    if (time < 0) {
      clearInterval(timeOut);
      window.location.reload();
    } else {
      let minutes = Math.floor(time / 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.querySelector(".vidlik").innerHTML = `${minutes} : ${seconds}`;
      time--;
    }
  }
});
document.querySelector(".btn-minus").addEventListener("mouseout", () => {
  document.querySelector(".btn-minus").classList.remove("shadow");
});

document.querySelector(".btn5").addEventListener("click", function () {
  document.querySelector(".btn5").classList.add("shadow");
  document.querySelector(".btn6").classList.remove("shadow");
  document.querySelector(".btn7").classList.remove("shadow");
});
document.querySelector(".btn6").addEventListener("click", function () {
  console.log("STOP!!!");
  document.querySelector(".btn5").classList.remove("shadow");
  document.querySelector(".btn6").classList.add("shadow");
  document.querySelector(".btn7").classList.remove("shadow");
});
document.querySelector(".btn7").addEventListener("click", function () {
  document.querySelector(".btn5").classList.remove("shadow");
  document.querySelector(".btn6").classList.remove("shadow");
  document.querySelector(".btn7").classList.add("shadow");
});

let input25 = +document.getElementById("inp25").value;
let time = input25 * 60;
console.log(time);
let timeOut;
document.querySelector(".btn5").addEventListener("click", () => {
  timeOut = setInterval(mainTimers, 1000);
  document.querySelector(".btn5").disabled = true;
});
document.querySelector(".btn6").addEventListener("click", () => {
  clearInterval(timeOut);
  document.querySelector(".btn5").disabled = false;
});
document.querySelector(".btn7").addEventListener("click", () => {
  clearInterval(timeOut);
  let minutes = 0;
  let seconds = 0;
  document.querySelector(".vidlik").innerHTML = "00:00";
  document.querySelector(".btn5").disabled = false;
});
function mainTimers() {
  if (time < 0) {
    clearInterval(timeOut);
    window.location.reload();
  } else {
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector(".vidlik").innerHTML = `${minutes} : ${seconds}`;
    time--;
  }
}
