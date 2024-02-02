import Link from "next/link";
import AboutLink from "../NavLink/AboutLink";
import ContactLink from "../NavLink/ContactLink";

const Navbar = async ({ category }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-5 border-y  py-3 ">
        <Link
          href={"/"}
          className={`flex items-center gap-3 text-sm text-green-400 font-bold     capitalize  hover:bg-none border-b  border-b-green-400 ease-linear duration-500 rounded-none  p-0 pb-1 cursor-pointer `}
        >
          Home
        </Link>
        <p className="h-4 border border-black mb-1"></p>
        <AboutLink />
        <p className="h-4 border border-black mb-1"></p>
        <ContactLink />
        <AboutLink />
        <p className="h-4 border border-black mb-1"></p>
        <ContactLink />
        <AboutLink />
        <p className="h-4 border border-black mb-1"></p>
        <ContactLink />
        <AboutLink />
        <p className="h-4 border border-black mb-1"></p>
        <ContactLink />
        <AboutLink />
        <p className="h-4 border border-black mb-1"></p>
        <ContactLink />
      </div>
    </div>
  );
};

export default Navbar;
