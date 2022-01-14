import { useCallback, useEffect, useState } from 'react';

function useFieldValues(initialValues) {
  const [fieldValues, setFieldValues] = useState(initialValues);

  // 함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재생성
  const handleFieldChange = useCallback((e) => {
    const { name, value, files } = e.target;
    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: (files && Array.from(files)) || value,
      };
    });
  }, []);

  const clearFieldValues = useCallback(() => {
    setFieldValues(initialValues);
  }, [initialValues]);

  // initialValues 속성값이 변경되면 fieldValues를 초기화합니다.
  useEffect(() => {
    setFieldValues(initialValues);
  }, [initialValues]);

  return {
    fieldValues,
    handleFieldChange,
    clearFieldValues,
    setFieldValues,
  };
}

export default useFieldValues;

// import { useCallback, useState } from 'react';

// function useFieldValues(initialFieldValues) {
//   const [fieldValues, setFieldValues] = useState(initialFieldValues);

//   const clearFieldValues = useCallback(
//     () => setFieldValues(initialFieldValues),
//     [], // setter는 deps를 쓰지 않음
//   );

//   // 함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재생성
//   const handleFieldChange = useCallback((e) => {
//     const { name, value } = e.target; // name은 식별자, value는 값
//     setFieldValues((prevFieldValues) => ({
//       ...prevFieldValues,
//       [name]: value, // name이라는 속성이 계산되어야 하므로 []사용
//     }));
//   }, []);

//   // // onChange의 리스너
//   // const handleFieldChange = (e) => {
//   //   const { name, value } = e.target; // name은 식별자, value는 값
//   //   setFieldValues((prevFieldValues) => ({
//   //     ...prevFieldValues,
//   //     [name]: value, // name이라는 속성이 계산되어야 하므로 []사용
//   //   }));
//   // };

//   // return은 배열이나 오브젝트로 반환 가능
//   return { fieldValues, handleFieldChange, clearFieldValues, setFieldValues };
// }

// export default useFieldValues;
