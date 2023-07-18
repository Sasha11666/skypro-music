import React from "react";
import { items } from "./Playlist";

function FirstFilterItem({
  firstShown,
  setfirstShown,
  setSecondShown,
  setThirdShown,
}) {
  let active;
  if (firstShown) {
    active = "active ";
  } else {
    active = "";
  }
  return (
    <div className="filter-item">
      <div
        onClick={() => {
          setfirstShown(!firstShown);
          setSecondShown(false);
          setThirdShown(false);
        }}
        className={active + "filter__button button-author _btn-text"}
      >
        исполнителю
      </div>
      {firstShown && (
        <div className="options-container">
          {items.map(({ id, author }) => (
            <div className="option">
              <input type="radio" className="radio" id={id} name="category" />
              <label htmlFor={id}>{author}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FirstFilterItem;
