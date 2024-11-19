'use client'

import { useEffect } from "react"


function addLeadingZero(num) {
  return num.toString().padStart(2, '0')
}

export const CountDown = () => {



  useEffect(() => {
    // Actualiza la cuenta regresiva cada segundo
    const countdownFunction = setInterval(function () {
      // const now = new Date().getTime();
      // const timeLeft = eventDate - now;

      // // Cálculos de tiempo para días, horas, minutos y segundos
      // const days = addLeadingZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      // const hours = addLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      // const minutes = addLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      // const seconds = addLeadingZero(Math.floor((timeLeft % (1000 * 60)) / 1000));

      // // Mostrar los resultados
      // document.getElementById("days").innerHTML = days;
      // document.getElementById("hours").innerHTML = hours;
      // document.getElementById("minutes").innerHTML = minutes;
      // document.getElementById("seconds").innerHTML = seconds;

      // // Si la cuenta regresiva ha terminado, muestra un mensaje
      // if (timeLeft < 0) {
      //   clearInterval(countdownFunction);
      //   document.getElementById("days").innerHTML = '0';
      //   document.getElementById("hours").innerHTML = '0';
      //   document.getElementById("minutes").innerHTML = '0';
      //   document.getElementById("seconds").innerHTML = '0';
      // }

    }, 1000);

  }, [])

  return (
    <div>CountDown</div>
  )
}
