import { useState } from 'react';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const clearFieldValues = () => setFieldValues(initialFieldValues);

  // onChange의 리스너
  const handleFieldChange = (e) => {
    const { name, value } = e.target; // name은 식별자, value는 값

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value, // name이라는 속성이 계산되어야 하므로 []사용
    }));
  };
  // return은 배열이나 오브젝트로 반환 가능
  return { fieldValues, handleFieldChange, clearFieldValues, setFieldValues };
}

export default useFieldValues;
