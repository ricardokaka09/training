import { useState } from "react";
interface todo {
  id: number;
}

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
    console.log(guest);
  };
  return (
    <div>
      <h3>Adding</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add </button>

      <ul>
        {guest.map((item, _) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
