import Link from "next/link";
import { MouseEventHandler } from "react";
export default function Mobile({
  handleClick,
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="mobile-menu fixed top-0 left-0 right-0 w-screen bg-white h-screen grid place-content-center text-center font-bold text-xl min-w-[240px]">
      <Link
        href={"/"}
        className="block py-2 px-4 tx-sm hover:bg-grey-200"
        onClick={handleClick}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className="block py-2 px-4 tx-sm hover:bg-grey-200"
        onClick={handleClick}
      >
        About me
      </Link>
      <Link
        href={"/suggestions"}
        className="block py-2 px-4 tx-sm hover:bg-grey-200"
        onClick={handleClick}
      >
        Suggestions
      </Link>

      <button className="absolute top-3.5 right-3.5" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-x-square "
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 3.5 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
