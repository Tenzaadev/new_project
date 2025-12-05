import { useState } from "react";

const subway_options = [
  { name: "Все", code: "All" },
  { name: "Арбатская", code: "Arbat" },
  { name: "Александровский сад", code: "Alexanders Garden" },
  { name: "Московская", code: "Moscow" },
  { name: "Парк Культуры", code: "Culture" },
  { name: "Театральная", code: "Theatr" },
]

export default function FilterCafes({ subway, setSubway }) {
  return(
    <div className="controls">
      <select
        name="subway"
        id="subway"
        value={subway}
        onChange={(e) => setSubway(e.target.value)}
      >
          {subway_options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  )
}