import { useState } from "react";

function useToggle(initialValue = false) {
  const [toggled, setToggle] = useState(initialValue);

  return { toggled, setToggle };
}

export default useToggle;