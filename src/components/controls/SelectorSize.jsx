import { useContext } from "react";
import { DataContext } from "../../context";

function SelectorSize() {
  const ctx = useContext(DataContext);
  const onChange = (e) => {
    ctx.setSelectionSize(parseInt(e.target.value));
  };

  return (
    <div>
      Selection size:
      <br />
      <select
        value={ctx.selectionSize}
        onChange={onChange}
        style={{ width: "100%", fontSize: "2em" }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
}

export default SelectorSize;
