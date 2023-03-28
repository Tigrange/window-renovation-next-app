import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FrameMaterial() {
  const dispatch = useDispatch();
  const [selectedFrameMaterial, setSelectedFrameMaterial] = useState("");

  const handleFrameMaterialChange = (event) => {
    const value = event.target.value;
    setSelectedFrameMaterial(value);
    dispatch({ type: "SET_FRAME_MATERIAL", payload: value });
  };

  return (
    <div className="my-4">
      <label
        htmlFor="frameMaterial"
        className="block font-medium text-gray-700"
      >
        Frame Material
      </label>
      <select
        id="frameMaterial"
        name="frameMaterial"
        value={selectedFrameMaterial}
        onChange={handleFrameMaterialChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a frame material</option>
        <option value="wood">Wood</option>
        <option value="aluminum">Aluminum</option>
        <option value="vinyl">Vinyl</option>
        <option value="fiberglass">Fiberglass</option>
      </select>
    </div>
  );
}
export default FrameMaterial;


