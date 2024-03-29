"use client";

import {
  Bars4Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@/lib/material/heroIcon";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@/lib/material/mtClass";
import Link from "next/link";
import React, { useState } from "react";
const AboutLink = () => {
  const navListMenuItems = [
    {
      title: "Awards",
      link: "awards",
      description: "Find the perfect solution for your needs.",
      icon: SquaresPlusIcon,
    },
    {
      title: "Team",
      link: "team",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
    },
    {
      title: "Sponsors & Partners",
      link: "sponsors",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
    },
    {
      title: "Mission & Vision",
      link: "mission",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
    },
    {
      title: "Branches",
      link: "branch",
      description: "Reach out to us for assistance or inquiries",
      icon: GlobeAmericasIcon,
    },
    {
      title: "aboutus",
      link: "aboutus",
      description: "Find the perfect solution for your needs.",
      icon: PhoneIcon,
    },
    {
      title: "News",
      link: "aboutus",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: NewspaperIcon,
    },
    {
      title: "Products",
      link: "aboutus",
      description: "Find the perfect solution for your needs.",
      icon: RectangleGroupIcon,
    },
    {
      title: "Special Offers",
      link: "aboutus",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link href={"/about"} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg ">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <>
      <Menu
        lockScroll={true}
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top-start"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium ">
            <div
              className={`flex items-center gap-3 text-sm font-bold     capitalize  hover:bg-none border-b border-b-white hover:border-b-green-400 ease-linear duration-500 rounded-none  p-0 pb-1 cursor-pointer `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <p> About</p>

              <ChevronDownIcon
                strokeWidth={2.5}
                className={` h-3 w-3 transition-transform  ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </Typography>
        </MenuHandler>
        <MenuList className=" w-screen -mt-1   rounded-none  pb-20 px-20 ease-linear duration-100 min-h-96  z-50">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0   max-w-6xl mx-auto">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
};

export default AboutLink;
