import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [greet, setGreet] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());

      const hour = now.getHours();

      if (hour >= 12 && hour < 18) {
        setGreet("Good Afternoon");
      } else if (hour >= 18) {
        setGreet("Good Evening");
      } else {
        setGreet("Good Morning");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
      <h2>{greet}</h2>
    </div>
  );
}

export default Clock;