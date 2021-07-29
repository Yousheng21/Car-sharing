import { useEffect, useState } from "react";
import { searchCity } from "../../actions/city";
import { searchAddress } from "../../actions/address";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState({ value: false, text: "" });
  const [isCompareError, setCompareError] = useState({
    value: true,
    text: "",
    array: [],
  });
  const [inputValid, setInputValid] = useState({ value: false, text: "" });

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "isCompareCity":
          if (
            validations[validation].array.some((item) => {
              return value.toLowerCase() === item.name.toLowerCase();
            }) ||
            value.length === 0
          ) {
            setCompareError({
              value: false,
              text: "",
              array: validations[validation].array,
            });
          } else {
            setCompareError({
              value: true,
              text: validations[validation].text,
            });
          }
          break;
        case "isCompareAddress":
          if (
            validations[validation].array.some((item) => {
              return value.toLowerCase() === item.address.toLowerCase();
            })
          ) {
            setCompareError({
              value: false,
              text: "",
              array: validations[validation].array,
            });
          } else {
            setCompareError({
              value: true,
              text: validations[validation].text,
            });
          }
          break;
        case "isEmpty":
          if (value) {
            setEmpty({ value: false, text: "" });
          } else {
            setEmpty({ value: true, text: validations[validation].text });
          }
          break;
        default: {
          break;
        }
      }
    });
  }, [value]);

  useEffect(() => {
    if (isCompareError.value || isEmpty.value) {
      setInputValid({ value: false, text: "Неправильно введенные данные" });
    } else {
      setInputValid({ value: true, text: "" });
    }
  }, [isCompareError.value, isEmpty.value]);

  return { isEmpty, isCompareError, inputValid };
};

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [focus, setFocus] = useState(false);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    searchCity(e.target.value);
  };

  const onChangeAddress = (e) => {
    setValue(e.target.value);
    searchAddress(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
    setFocus(false);
  };

  const onClick = (item) => {
    setValue(item);
    setFocus(false);
  };

  const onFocus = () => {
    setFocus(true);
    setDirty(false);
  };

  const close = () => {
    setValue("");
    setFocus(false);
  };

  const set = (query) => {
    setValue(query);
  };

  const printError = (validators) => {
    let flag = false;
    for (let i = 0; i < validators.length; i += 1) {
      for (let j = 0; j <= i; j += 1) {
        if (j < i) {
          flag = !valid[validators[j]].value;
        } else {
          flag = valid[validators[i]].value;
        }
      }
      if (flag) return `${valid[validators[i]].text}`;
    }
    return false;
  };

  return {
    value,
    focus,
    onChange,
    onChangeAddress,
    onBlur,
    onFocus,
    onClick,
    close,
    set,
    isDirty,
    printError,
    ...valid,
  };
};
