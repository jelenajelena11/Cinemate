import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="flex">
      <div className="flex flex-col dark:text-gray-800 text-white bg-gray-800 justify-center items-center dark:bg-white max-w-sm p-4 rounded m-auto">
        <div className="text-left">
          <h2 className="font-bold text-2xl m-2">Page Not Found</h2>
          <p className="m-2">
            Looks like you have followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <Link to="/">
            <button className="font-medium my-4 underline hover:text-black">
              Back to site
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
