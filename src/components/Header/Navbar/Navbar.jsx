import Link from "next/link";
import AboutLink from "../NavLink/AboutLink";
import ContactLink from "../NavLink/ContactLink";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-5 border-y  py-3 ">
        <AboutLink />
        <ContactLink />
        <AboutLink />
        <ContactLink />
        <AboutLink />
        <ContactLink />
        <AboutLink />
        <ContactLink />
        <AboutLink />
        <ContactLink />
      </div>
    </div>
  );
};

export default Navbar;
