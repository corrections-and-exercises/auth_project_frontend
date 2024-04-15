function EntryPreview({ entry }) {
  return (
    <div className="m-6 w-52">
      <p className="text-wrap">{entry.title}</p>
      <img className="m-h-64 min-w-40 " src={entry.image} alt="" />
    </div>
  );
}

export default EntryPreview;
