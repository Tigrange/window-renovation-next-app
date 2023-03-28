import { useSelector } from "react-redux";

function SelectionsSummaryPage() {
  const frameMaterial = useSelector((state) => state.frameMaterial);
  const glassType = useSelector((state) => state.glassType);
  const frameColor = useSelector((state) => state.frameColor);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Window Renovation Selections Summary
      </h1>
      <ul className="list-disc list-inside">
        <li>Frame Material: <span className="text-sm text-red-600 font-semibold"> {frameMaterial} </span></li>
        <li>Glass Type: <span className="text-sm text-red-600 font-semibold"> {glassType} </span></li>
        <li>Frame Color:  <span className="text-sm text-red-600 font-semibold">{frameColor} </span></li>
      </ul>
    </div>
  );
}

export default SelectionsSummaryPage;
