import { useEffect, useState } from "react";
import FilterCafes from "./FilterCafes.jsx";

export default function CafesTable() {

  const [cafes, setCafes] = useState([]);
  const [subway, setSubway] = useState("All");

  useEffect(() => {
    fetch("/cafes").then(res => res.json()).then(data => setCafes(data.cafes)).catch(console.error);
  }, [])

  const filtered = subway === "All"
    ? cafes
    :cafes.filter((cafe) => cafe.subwayCode === subway);

  return(
    <div className="cafesTable">
      <FilterCafes subway={subway} setSubway={setSubway} />

  
      <ul className="cardsList">
        {filtered.map((cafe) => (
          <li key={cafe.id} className="card">
            <img
              src= {cafe.image || "https://via.placeholder.com/150" }
              alt= {cafe.name}
            />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}