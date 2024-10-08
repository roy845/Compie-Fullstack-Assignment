import { rowLabels } from "../constants/labels";
import "../styles/RowLabels.css";

const RowLabels = (): JSX.Element => {
  return (
    <div className="row-labels-container">
      {rowLabels.map((label: string) => (
        <div key={label} className="row-label">
          {label}
        </div>
      ))}
    </div>
  );
};

export default RowLabels;
