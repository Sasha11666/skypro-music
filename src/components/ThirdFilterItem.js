import React from "react";
import { items } from "./Playlist";

function ThirdFilterItem({
  thirdShown,
  setThirdShown,
  setfirstShown,
  setSecondShown,
}) {
  let active;
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].genre)) {
      itemsFiltered.push(items[i].genre);
    } else {
      i++;
    }
  }

  if (thirdShown) {
    active = "active ";
  } else {
    active = "";
  }

  return (
    <div className="filter-item">
      <div
        onClick={() => {
          setThirdShown(!thirdShown);
          setfirstShown(false);
          setSecondShown(false);
        }}
        className={active + "filter__button button-genre _btn-text"}
      >
        жанру
      </div>
      {thirdShown && (
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

export default ThirdFilterItem;
