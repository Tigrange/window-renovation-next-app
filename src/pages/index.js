import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import FrameMaterial from "@/components/FrameMaterial";
import GlassType from "@/components/GlassType";
import FrameColor from "@/components/FrameColor";

export default function Home() {
  const router = useRouter();
  const frameMaterial = useSelector((state) => state.frameMaterial);
  const glassType = useSelector((state) => state.glassType);
  const frameColor = useSelector((state) => state.frameColor);
  const handleSelectionsSubmit = () => {
    router.push("/selections-summary");
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Window Renovation Selections</h1>
      <FrameMaterial />
      <GlassType />
      <FrameColor />
      {frameMaterial && glassType && frameColor && (
        <button
          type="button"
          className="btn-primary"
          onClick={() => handleSelectionsSubmit()}
        >
          Next page
        </button>
      )}
    </div>
  );
}
