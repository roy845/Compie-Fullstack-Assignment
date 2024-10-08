import { columnLabels } from "../constants/labels";
import "../styles/ColumnLabels.css";

const ColumnLabels = (): JSX.Element => {
  return (
    <div className="column-labels-container">
      <div className="column-labels-spacer" />
      {columnLabels.map((label: string) => (
        <div key={label} className="column-label">
          {label}
        </div>
      ))}
    </div>
  );
};

export default ColumnLabels;
