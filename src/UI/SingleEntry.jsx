import { useState, useEffect } from "react";
import { getSingleEntry } from "../utils/blogUtils";
import { useParams } from "react-router-dom";
function SingleEntry() {
  const [entry, setEntry] = useState({ title: "", body: "" });
  const { id } = useParams();
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const { data } = await getSingleEntry(id);
      setEntry(data);
    }
  }, [id]);

  return (
    <div className="mt-10 flex justify-center gap-10">
      <div className="w-1/3 text-right">
        <p className="bold mb-2 text-2xl">{entry.title}</p>
        <p>{entry.body}</p>
        <p className="text-sm">written by: {entry.author?.firstName}</p>
      </div>
      <img className="max-h-screen max-w-screen-sm " src={entry.image} alt="" />
    </div>
  );
}

export default SingleEntry;
