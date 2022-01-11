import { useEffect, useState } from 'react';
import './Clock.css';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(
    // 이 함수는 현 컴포넌트가 mount 시에 호출
    () => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      // 리턴된 함수는 현 컴포넌트 unmount 시에 호출됨
      return () => {
        clearInterval(interval);
      };
    },
    [],
  );
  return (
    <div className="clock-wrapper">
      <h2>시계</h2>
      <div className="clock">
        <p className="date">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}{' '}
          {WEEKDAYS[date.getDay()]}
        </p>
        <p className="time">
          {/* {date.toLocaleTimeString('en-us')} */}
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <p className="text">Powered by React.js</p>
      </div>
    </div>
  );
}

export default Clock;
