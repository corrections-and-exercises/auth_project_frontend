import { Link } from "react-router-dom";
function EntryPreview({ entry }) {
  return (
    <div className="m-6 w-52">
      <p className="text-wrap">{entry.title}</p>
      <img className="h-64 " src={entry.image} alt="" />
    </div>
  );
}

export default EntryPreview;
