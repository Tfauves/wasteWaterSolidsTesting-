import Link from "next/link";
import DeleteBlock from "./DeleteBlock";

//todo: issue with edit of timemarks crashing
// edit mode to populate the current timemarks
const ReportCard = ({ report }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="ml-auto">
        <DeleteBlock id={report._id} />
      </div>
      <Link
        href={`/NewReportPage/${report._id}`}
        style={{ display: "contents" }}
      >
        <h4>{report.operatorID}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{report.description}</p>

        <p className="text-xs mt-2">{formatTimestamp(report.createdAt)}</p>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(report.timeMarks).map(([timeKey, timeValue]) => (
          <div className="flex flex-col" key={timeKey}>
            <p id={timeKey}>{timeKey}</p>
            <p id={timeKey}>{timeValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportCard;
