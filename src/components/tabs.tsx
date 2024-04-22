import React, { useState } from "react";
import Content from "./content";
import { CONTENT_TYPE } from "../content_types";

function Tabs() {
  const tabs = [
    {
      title: "Forbidden Sites",
      content: <Content type={CONTENT_TYPE.SITES} />,
    },
    {
      title: "Moderators",
      content: <Content type={CONTENT_TYPE.MODERATORS}  />,
    },
    {
        title:"Monitoring List",
        content:<Content type={CONTENT_TYPE.MODERATING} />
    }
  ];
  const [currentTab, setCurrentTab] = useState<any>(tabs[0]);
  return (
    <>
      <header className="flex justify-between w-9/12">
        {tabs.map((tab) => {
          return (
            <div
              className={`font-bold w-6/12 p-1 mr-1 text-center ${
                currentTab.title === tab.title
                  ? "border-b-4 border-primary"
                  : " border-b-4 border-gray-40"
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab.title}
            </div>
          );
        })}
      </header>
      <div>{currentTab.content}</div>
    </>
  );
}

export default Tabs;
