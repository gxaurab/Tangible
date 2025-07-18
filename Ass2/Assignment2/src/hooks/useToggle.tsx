import { useState } from "react";

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
}

const useToggle = (): UseToggleReturn => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = () => setValue((prev) => !prev);

  return { value, toggle };
};

export default useToggle;
