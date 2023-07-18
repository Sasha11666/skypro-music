import React from "react";
import { items } from "./Playlist";

function SecondFilterItem({
  secondShown,
  setSecondShown,
  setfirstShown,
  setThirdShown,
}) {
  let active;
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].year)) {
      itemsFiltered.push(items[i].year);
    } else {
      i++;
    }
  }

  if (secondShown) {
    active = "active ";
  } else {
    active = "";
  }

  return (
    <div className="filter-item">
      <div
        onClick={() => {
          setSecondShown(!secondShown);
          setfirstShown(false);
          setThirdShown(false);
        }}
        className={active + "filter__button button-year _btn-text"}
      >
        году выпуска
      </div>
      {secondShown && (
        <div className="options-container">
          {itemsFiltered.map((item, index) => (
            <div className="option">
              <input
                type="radio"
                className="radio"
                id={index}
                name="category"
              />
              <label htmlFor={index}>{item}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SecondFilterItem;
