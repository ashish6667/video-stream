import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import {
  SiYoutubestudio,
  SiYoutubekids,
  SiYoutubemusic,
  SiTrendmicro,
  SiStylelint,
} from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";
import { MdPodcasts, MdOutlineWatchLater } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    { id: 1, name:"Home", icon: <GoHome /> },
    { id: 2, name:"Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name:"Subscribtion", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  const sidebarItems5 = [
    { id: 1, name: "Settings", icon: <MdSettings /> },
    { id: 2, name: "Report history", icon: <MdOutlineFlag /> },
    { id: 3, name: "Help", icon: <MdHelpOutline /> },
    { id: 4, name: "Send feedback", icon: <MdOutlineFeedback /> },
  ];

  return (
    <div className="px-6 w-[31%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      {/* Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* You */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* Explore */}
      <div className="mt-4 space-y-3">
        <h1 className="font-semibold">Explore</h1>
        {sidebarItems3.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* More From YouTube */}
      <div className="mt-4 space-y-3">
        <h1 className="font-semibold">More From YouTube</h1>
        {sidebarItems4.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
            <div className="text-xl text-red-500">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* Settings & Help */}
      <div className="mt-4 space-y-3">
        <h1 className="font-semibold">Settings & Help</h1>
        {sidebarItems5.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* Footer */}
      <span className="text-xs text-gray-600 font-semibold">
        About · Press · Copyright · Contact us · Creators <br />
        Advertise · Developers <br />
        Terms · Privacy · Policy & Safety <br />
        How YouTube works <br />
        Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2025 Learn Coding</p>
    </div>
  );
}

export default Sidebar;
