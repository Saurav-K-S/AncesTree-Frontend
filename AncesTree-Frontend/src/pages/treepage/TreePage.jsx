import React, { useEffect } from "react";
import Tree from "react-d3-tree";

let orgChart = {
  name: "Ponnappan",
  attributes: {
    id: "1",
  },
  children: [
    {
      name: "Kuttappan",
      attributes: {
        id: "1.1",
      },
      children: [
        { name: "Chellappan", attributes: { id: "1.1.1" } },
        { name: "Mary Kunj", attributes: { id: "1.1.2" } },
      ],
    },
    {
      name: "Varkichan",
      attributes: {
        id: "1.2",
      },
      children: [
        { name: "Raphael", attributes: { id: "1.2.1" } },
        { name: "Chacko", attributes: { id: "1.2.2" } },
      ],
    },
    {
      name: "Thomas",
      attributes: {
        id: "1.3",
      },
      children: [
        { name: "Philomina", attributes: { id: "1.3.1" } },
        { name: "Theresa", attributes: { id: "1.3.2" } },
      ],
    },
    {
      name: "Kuttapan",
      attributes: {
        id: "1.4",
      },
      children: [
        { name: "Rayyappan", attributes: { id: "1.4.1" } },
        { name: "Christy", attributes: { id: "1.4.2" } },
      ],
    },
  ],
};

const renderCustomNode = ({ nodeDatum, toggleNode }) => {
  // useEffect(()=>{},[])

  return (
    <g id={nodeDatum.name + "_id"} className="stroke-[1px]">
      <circle
        r={35}
        className="fill-[#FFEEB2] stroke-none"
        onClick={() => toggleNode()}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"></svg>
      <rect
        x={33}
        y={2}
        width="150"
        height="60"
        rx="18"
        ry="18"
        fill="#FEFFDD"
        className="stroke-current stroke-[0.5px]"
      />
      <text
        x={55}
        y={22}
        fill="#000000"
        className="font-IBM-Plex-Mono font-medium text-[14px] stroke-[0.8px]"
      >
        {nodeDatum.name}
      </text>
      <rect
        x={40}
        y={33}
        width="50"
        height="20"
        rx="9"
        ry="9"
        fill="#CCFFE0"
        className="stroke-none"
      />
      <text
        x={46}
        y={47}
        width="auto"
        height="20"
        fill="#3C8B5C"
        className="font-IBM-Plex-Mono font-medium text-[11px] stroke-none text-center"
      >
        {nodeDatum.attributes.id}
      </text>
    </g>
  );
};

export default function TreePage() {
  return (
    <div id="treeWrapper" className="w-[1100px] h-[700px] border-black  border-2">
      <Tree
        translate={{ x: 550, y: 200 }}
        data={orgChart}
        pathFunc={"diagonal"}
        orientation="vertical"
        separation={{ siblings: 2, nonSiblings: 2 }}
        initialDepth={0}
        enableLegacyTransitions={true}
        renderCustomNodeElement={(rd3tProps) => renderCustomNode(rd3tProps)}
      />
    </div>
  );
}
