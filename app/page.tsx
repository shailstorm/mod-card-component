import ModCard from "./components/ModCard";
import { sampleCard } from "./data/sampleModCard";

export default function Home() {

  return (
    <div className="flex justify-center items-center h-screen">
      <ModCard {...sampleCard}/>
    </div>
  );
}
