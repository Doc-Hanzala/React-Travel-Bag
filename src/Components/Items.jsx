import { useState } from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, onDeleteAll }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="packingList">
      <div className="items">
        {sortedItems &&
          sortedItems.map((item) => {
            return <SingleItem key={item.id} {...item} />;
          })}
      </div>

      {sortedItems.length > 0 && (
        <>
          <div className="options">
            <button onClick={onDeleteAll} className="btn clear-btn">
              clear all
            </button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">sort by input order</option>
              <option value="description">sort by description</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
