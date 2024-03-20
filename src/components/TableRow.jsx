import React, { useState } from "react";

function TableRow({ data, index }) {
  const [expanded, setExpanded] = useState(false);

  const truncatedData = (data) => {
    return data.length > 100 ? data.substring(0, 100) + "..." : data;
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
      <td className="border px-4 py-2">{data.submission_id}</td>
      <td className="border px-4 py-2">{data.username}</td>
      <td className="border px-4 py-2">{data.lang}</td>
      <td className="border px-4 py-2">{data.standard_input}</td>
      <td className="border px-4 py-2">
        {expanded
          ? data.source_code
          : truncatedData(data.source_code)}
        {data.source_code.length > 100 && (
          <button className="text-blue-500" onClick={toggleExpansion}>
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </td>
      <td className="border px-4 py-2 w-4 text-xs">
        {data.submission_time}
        </td>
      <td className="border px-4 py-2">{data.output}</td>
    </tr>
  );
}

export default TableRow;
