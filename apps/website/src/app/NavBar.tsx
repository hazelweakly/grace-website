import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {

  const location = useLocation();
  const activeClass = 'bg-sky-600 bg-cyan-400 text-white px-4 py-3 flex items-center space-x-4 rounded-md';
  const inactiveClass = 'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md';

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link to="/" title="home">
          </Link>
        </div>

        <div className="mt-8 text-center">
          <img
              src="/assets/images/headshot.jpg"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Grace Durant
          </h5>
          <span className="hidden text-gray-400 lg:block">
            Software Engineer
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
        <li>
            <Link
              to="/"
              className={location.pathname === '/' ? activeClass : inactiveClass}
            >
              <svg
                // xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              aria-label="resume"
              className={location.pathname === '/resume' ? activeClass : inactiveClass}
            >
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  className="fill-current text-cyan-400 dark:fill-slate-600"
                ></path>
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  className="fill-current text-cyan-200 group-hover:text-cyan-300"
                ></path>
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  className="fill-current group-hover:text-sky-300"
                ></path>
              </svg>
              <span className="-mr-1 font-medium">Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={location.pathname === '/about-me' ? activeClass : inactiveClass}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <span className="group-hover:text-gray-700">About Me</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={location.pathname === '/blog' ? activeClass : inactiveClass}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={location.pathname === '/youtube' ? activeClass : inactiveClass}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:text-gray-700">YouTube</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={location.pathname === '/dancer' ? activeClass : inactiveClass}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Dancer</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
