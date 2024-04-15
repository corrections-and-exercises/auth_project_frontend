import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEntries } from "../utils/blogUtils";
import EntryPreview from "../UI/EntryPreview";
function Read() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const { data } = await getEntries(`${import.meta.env.VITE_URL_API}/blog`);
      console.log("data2", data);
      setEntries(data);
    }
  }, []);
  return (
    <div className="flex justify-center">
      {entries.map((entry) => (
        <Link key={entry._id} to={entry._id}>
          <EntryPreview key={entry._id} entry={entry} />
        </Link>
      ))}
    </div>
  );
}

export default Read;