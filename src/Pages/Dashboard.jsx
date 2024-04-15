import { useState } from "react";
import EntryPreview from "../UI/EntryPreview";
import { Link } from "react-router-dom";

function Dashboard() {
  const [entries, setEntries] = useState([]);

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="mb-10">Dashboard</h1>
        <Link className=" py-6 hover:text-orange-700 " to="/create">
          Create a new entry!
        </Link>
      </div>
      <div className="flex w-1/2 flex-col">
        <h2>Your entries</h2>
        {entries.map((entry) => (
          <Link key={entry._id} to={`/read/${entry._id}`}>
            <EntryPreview entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
