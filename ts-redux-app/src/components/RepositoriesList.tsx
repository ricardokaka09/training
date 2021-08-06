import { useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { createUser } = useAction();
  const state = useSelector((state) => state);
  console.log(state);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createUser();
    // console.log();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
