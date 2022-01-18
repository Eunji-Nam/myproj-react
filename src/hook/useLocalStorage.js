// key: localStorage에 저장될 키 이름
// initialValue: 키의 초기값

import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const jsonString = window.localStorage.getItem(key);
    try {
      return jsonString ? JSON.parse(jsonString) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  useEffect(() => {
    const jsonString = JSON.stringify(data);
    window.localStorage.setItem(key, jsonString);
  }, [key, data]);

  // TODO : 고민해 볼 문제 -> data에 대한 useEffect로서 구현할 방법
  //   const setDataToLocalStorage = (value) => {
  //     // FIXME : value가 함수일때, 외부 data 참조하는 부분
  //     const valueToStare = value instanceof Function ? value(data) : value;
  //     setData(valueToStare);
  //     window.localStorage.setItem(key, JSON.stringify(valueToStare));
  //   };

  return [data, setData];
}

export default useLocalStorage;
