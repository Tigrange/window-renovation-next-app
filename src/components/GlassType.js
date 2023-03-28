import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";

function GlassType() {
  const dispatch = useDispatch();
  const glassType = useSelector((state) => state.glassType);
  const [selectedGlassType, setSelectedGlassType] = useState(glassType);

  const handleGlassTypeChange = (event) => {
    const value = event.target.value;
    setSelectedGlassType(value);
    dispatch({ type: "SET_GLASS_TYPE", payload: value });
  };

  return (
    <div className="my-4">
      <label htmlFor="glassType" className="block font-medium text-gray-700">
        Glass Type
      </label>
      <select
        id="glassType"
        name="glassType"
        value={selectedGlassType}
        onChange={handleGlassTypeChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a glass type</option>
        <option value="clear">Clear</option>
        <option value="frosted">Frosted</option>
        <option value="tinted">Tinted</option>
        <option value="low-e">Low-E</option>
      </select>
    </div>
  );
}

export default GlassType;
