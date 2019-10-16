import React, { useState } from 'react';

import './SelectBox.scss';

const SelectBox = (props) => {

  const [isOpenSelectBox, setOpenState] = useState(false);
  const [currentValue, setCurrentValue] = useState(props.currentValue || '');

  const { values } = props;

  const isOpenClass = isOpenSelectBox ? 'is-open' : '';

  const setValueHandler = (item) => {
    setCurrentValue(item);
    setOpenState(false);
  };

  return (
    <div className={"select-box " + isOpenClass}>
      <div className="select-box__current">
        <input name={props.name} type="text" readOnly={true} value={currentValue}/>
        <div className="select-box__opener" onClick={() => setOpenState(true)}/>
      </div>
      <ul className="select-box__values">
        {
          values.map((item, index) => {
            return (
              <li key={index} onClick={() => setValueHandler(item)}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default SelectBox;
