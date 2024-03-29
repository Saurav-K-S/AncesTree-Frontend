import React, { useEffect } from "react";
import Tree from "react-d3-tree";

let orgChart = {
  name: "Adam Doe",
  attributes: {
    id: "1",
  },
  children: [
    {
      name: "Philip Baker Doe",
      attributes: {
        id: "1.1",
      },
      children: [
        { name: "Clark Baker", attributes: { id: "1.1.1" } },
        { name: "Mary Baker", attributes: { id: "1.1.2" } },
      ],
    },
    {
      name: "Irwin Hills Doe",
      attributes: {
        id: "1.2",
      },
      children: [
        { name: "Mason Hills", attributes: { id: "1.2.1" } },
        { name: "Davis Hills", attributes: { id: "1.2.2" } },
      ],
    },
    {
      name: "Thomas Jones Doe",
      attributes: {
        id: "1.3",
      },
      children: [
        { name: "Phillipa Jones", attributes: { id: "1.3.1" } },
        { name: "Yennefer Jones", attributes: { id: "1.3.2" } },
      ],
    },
    {
      name: "Bruce Wayne Doe",
      attributes: {
        id: "1.4",
      },
      children: [
        {
          name: "Thomas Wayne",
          attributes: { id: "1.4.1" },
          children: [
            // {},
            { name: "qwerty Wayne", attributes: { id: "1.4.1.2" } },
          ],
        },
        { name: "Charles Wayne", attributes: { id: "1.4.2" } },
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
        className="fill-[#FFEEB2] stroke-black stroke-[2px]"
        onClick={() => toggleNode()}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"></svg>
      <rect
        x={33}
        y={2}
        width="160"
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
    <div id="treeWrapper" className="h-screen border-line">
      <Tree
        translate={{ x: 525, y: 200 }}
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
