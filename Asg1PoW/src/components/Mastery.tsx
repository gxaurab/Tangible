import { details } from "../assets/details";
import Card from "./Card";

const Mastery = () => {
  return (
    <div>
      <h1>This is the card component being rendered</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map((detail) => (
          <Card key={detail.id} {...detail} />
        ))}
      </div>
    </div>
  );
};

export default Mastery;
