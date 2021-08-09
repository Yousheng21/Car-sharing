import React from "react";
import { additional } from "../../../../reducers/data/dataOrder";

const InputExtraServices = () => {
  return (
    <div>
      <h1>Доп услуги</h1>
      <section className="extra-additional">
        {additional.map((item) => (
          <label key={item} htmlFor={item}>
            {item}
            <input type="checkbox" name="additional" id={item} value={item} />
            <span className="check-mark" />
          </label>
        ))}
      </section>
    </div>
  );
};

export default InputExtraServices;
