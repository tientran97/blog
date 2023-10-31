import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo_boomslag from 'assets/img/boomslag-black.png'
import loading_dots from 'assets/img/loading-dots.gif'
function Navbar() {
    return (
      <nav className="w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed">
        <div className="px-4 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
            <Link to="/" className="ml-4 mt-2">
              <img
                src={logo_boomslag}
                width={140}
                height={120}
                alt="Boomslag logo"
                className=""
              />
            </Link>
            <div className="ml-4 mt-2 flex-shrink-0">
              <NavLink
                to="/our-story"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-6 hover:text-fuchsia-700 transition duration-300 ease-in-out"
              >
                Our story
              </NavLink>
              <NavLink
                to="/blog"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-6 hover:text-fuchsia-700 transition duration-300 ease-in-out"
              >
                Blog
              </NavLink>
              <NavLink
                to="/write"
                className="text-lg inline-flex font-medium leading-6 text-gray-900  mx-6 hover:text-fuchsia-700 transition duration-300 ease-in-out"
              >
                Write
              </NavLink>

              <button
                type="button"
                className=" ml-10 relative inline-flex items-center rounded-md border border-transparent bg-fuchsia-700 px-6 py-2 text-sm font-medium text-white shadow-sm hover:transition hover:duration-300 hover:ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
              >
                Get started
                <img
                  src={loading_dots}
                  alt="loading"
                  className="w-7 h-2 mt-1 ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}

const mapStatetoProps = state => ({

})

export default connect(mapStatetoProps, {

}) (Navbar);