import { useState, useEffect } from "react";

interface CountdownTimerProps {
  endTime: number;
}

const CountdownTimer = ({ endTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // No dependencies, runs once and updates every second

  function calculateTimeLeft() {
    const targetDate = new Date().getTime() + endTime;
    const currentDate = new Date().getTime();
    let secondsLeft = Math.max((targetDate - currentDate) / 1000, 0);

    const days = pad(Math.floor(secondsLeft / 86400));
    secondsLeft %= 86400;

    const hours = pad(Math.floor(secondsLeft / 3600));
    secondsLeft %= 3600;

    const minutes = pad(Math.floor(secondsLeft / 60));
    const seconds = pad(Math.floor(secondsLeft % 60));

    return { days, hours, minutes, seconds };
  }

  function pad(n: number) {
    return n < 10 ? "0" + n : n.toString();
  }

  return (
    <div id="countdown" className="text-center">
      <div id="tiles" className="flex justify-center space-x-4 text-3xl font-bold">
        <span className="p-4 bg-gray-800 text-white rounded-md">{timeLeft.days}</span>
        <span className="p-4 bg-gray-800 text-white rounded-md">{timeLeft.hours}</span>
        <span className="p-4 bg-gray-800 text-white rounded-md">{timeLeft.minutes}</span>
        <span className="p-4 bg-gray-800 text-white rounded-md">{timeLeft.seconds}</span>
      </div>
      <ul className="labels flex justify-center space-x-4 text-lg text-gray-500 mt-2">
        <li>Days</li>
        <li>Hours</li>
        <li>Mins</li>
        <li>Secs</li>
      </ul>
    </div>
  );
};

export default CountdownTimer;
