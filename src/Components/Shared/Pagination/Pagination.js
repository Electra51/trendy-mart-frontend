import "./pagination.css";

export default function Pagination({ length, page, setPage }) {
  const total_pages = Math.ceil(parseInt(length) / 5);

  return (
    <div className="pagination">
      <button
        className=""
        onClick={() => setPage(page - 1)}
        disabled={page === 0}>
        <span className="">«</span>
        <span className="">Previous</span>
      </button>

      {[...Array(total_pages)].map((a, idx) => (
        <button
          key={idx}
          onClick={() => setPage(idx)}
          className={`w-7 h-7 text-[12px] rounded-none ${
            page === idx
              ? "bg-[#3D00B7] text-background text-white"
              : "border border-[#3D00B7] text-[#3D00B7]"
          }`}>
          {idx + 1}
        </button>
      ))}
      <button
        className=""
        onClick={() => setPage(page + 1)}
        disabled={page === total_pages - 1}>
        <span className="">Next</span>
        <span className="">»</span>
      </button>
    </div>
  );
}
