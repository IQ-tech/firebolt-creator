import React from "react";
import { MarkerType } from "react-flow-renderer";

export const initialNodes: any = [
  {
    id: "1",
    //type: "input",
    type: "default",
    data: { label: "personal_data" },
    position: { x: 0, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
    // style: {
    //   borderColor: "#0041d0",
    // },
  },
  {
    id: "2",
    type: "default",
    data: { label: "addres" },
    position: { x: 200, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    // type: "output",
    type: "default",
    data: { label: "invoice_expiration" },
    position: { x: 400, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",

    // style: { borderColor: "#ff0072" },
  },
];

export const initialEdges = [
  { id: "1", source: "1", target: "2" },
  { id: "2", source: "2", target: "3" },
];


export const mockTracks = {
  slug: "default",
  steps: [
    "personal_data",
    "address",
    "occupation",
    "personal_documents",
    "invoice_expiration",
  ],
};

export const mockTracks1 = {
    slug: "alternative",
    steps: [
      "personal_data",
      "occupation",
      "address",
      "address1",
      "address2",
      "personal_documents",
      "invoice_expiration"
    ]
  }

