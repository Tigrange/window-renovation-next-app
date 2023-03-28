import { useDispatch } from "react-redux";
import { useState } from "react";

function FrameColor() {
  const dispatch = useDispatch();
  const [selectedFrameColor, setSelectedFrameColor] = useState("");

  const handleFrameColorChange = (event) => {
    const value = event.target.value;
    setSelectedFrameColor(value);
    dispatch({ type: "SET_FRAME_COLOR", payload: value });
  };

  return (
    <div className="my-4">
      <label htmlFor="frameColor" className="block font-medium text-gray-700">
        Frame Color
      </label>
      <select
        id="frameColor"
        name="frameColor"
        value={selectedFrameColor}
        onChange={handleFrameColorChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a frame color</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
      </select>
    </div>
  );
}

export default FrameColor;
