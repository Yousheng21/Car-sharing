import { useEffect, useState } from "react";
import { searchCity } from "../../actions/city";
import { searchAddress } from "../../actions/address";
import { setAddress, setCity } from "../../actions/app";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState({ value: false, text: "" });
  const [isCompareError, setCompareError] = useState({
    value: false,
    text: "",
    array: [],
  });
  const [inputValid, setInputValid] = useState({ value: false, text: "" });

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "isCompareCity":
          {
            const flag = validations[validation].array.find((item) => {
              return value.toLowerCase() === item.name.toLowerCase();
            });
            if (flag) {
              if (value) setCity(flag);
            }
            setCompareError({
              value: !value ? false : !flag,
              text: flag || !value ? "" : validations[validation].text,
            });
          }
          break;
        case "isCompareAddress":
          {
            const flag = validations[validation].array.find((item) => {
              return (
                value.toLowerCase() ===
                `${item.address.road} ${
                  item.address.house_number ?? ""
                }`.toLowerCase()
              );
            });
            if (flag) {
              setAddress(
                `${flag.address.road} ${flag.address.house_number ?? ""}`,
                flag.cityId,
                flag
              );
            }
            setCompareError({
              value: !flag,
              text: flag ? "" : validations[validation].text,
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

  const onClose = () => {
    setValue("");
    setFocus(true);
  };

  const onClick = (item) => {
    setValue(item);
    setFocus(false);
  };

  const onFocus = () => {
    setFocus(true);
    setDirty(false);
  };

  const printError = (validators) => {
    let flag = false;
    return validators.map((item) => {
      if (!flag) {
        if (valid[item].value) {
          flag = true;
          return valid[item].text;
        }
      }
      return true;
    });
  };

  return {
    value,
    focus,
    onChange,
    onChangeAddress,
    onBlur,
    onFocus,
    onClick,
    onClose,
    isDirty,
    printError,
    ...valid,
  };
};
