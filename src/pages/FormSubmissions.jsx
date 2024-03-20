import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";

function FormSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getsubmissions"); 
      console.log("Submission Response: ", response);
      setSubmissions(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const truncatedData = (data) => {
    return data.length > 100 ? data.substring(0, 100) + "..." : data;
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-5 mt-8 text-center">Form Submissions</h1>
      <div className="overflow-x-auto w-[90%] mx-auto">
        <table className="table-auto min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">stdin</th>
              <th className="px-4 py-2">Source Code</th>
              <th className="px-4 py-2">TimeStamp</th>
              <th className="px-4 py-2">stdout</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
                <TableRow key={index} data={submission} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormSubmissions;
