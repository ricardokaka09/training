import { ChildAsFC as Child } from "./Child";

export const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("active")}>
      <button>Reset</button>
    </Child>
  );
};
