import { useState } from "react";
import { useAppContext } from "../App";

const SingleItem = ({ description, quantity, id, packed }) => {
  const { handleDeleteItems } = useAppContext();
  const [isPacked, setIsPacked] = useState(packed);

  return (
    <div className="singleItem">
      <input
        type="checkbox"
        checked={isPacked}
        onChange={() => setIsPacked(!isPacked)}
      />

      <span>{quantity}</span>
      <h2
        style={isPacked ? { textDecoration: "line-through" } : {}}
        className="description"
      >
        {description}
      </h2>
      <h2 onClick={() => handleDeleteItems(id)} className="remove">
        x
      </h2>
    </div>
  );
};

export default SingleItem;
