import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import TestDataDisplay from "./TestDataDisplay";

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
        <DeleteBlock />
      </div>
      <Link href={`/reportPage/${report._id}`} style={{ display: "contents" }}>
        <h4>{report.operatorID}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{report.description}</p>
        {/* Render time marks */}
        <div className="flex mt-2">
          {Object.entries(report.timeMarks).map(([key, value]) => (
            <div key={key} className="flex flex-col mr-4">
              <p className="text-xs my-1">{key}</p>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex-grow">
          <TestDataDisplay timeMarks={report.timeMarks} />
        </div>
        <p className="text-xs mt-2">{formatTimestamp(report.createdAt)}</p>
      </Link>
    </div>
  );
};

export default ReportCard;
