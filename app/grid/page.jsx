import GridInput from "./Components/GridInput";
import colorsList from "@/app/ui/colors";
import { Suspense } from "react";

const colors = colorsList();

export default function GridInputPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GridInput colors={colors} />
    </Suspense>
  );
}
