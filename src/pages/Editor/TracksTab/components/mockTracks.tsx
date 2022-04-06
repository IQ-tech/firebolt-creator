import React from "react";
import { MarkerType } from "react-flow-renderer";

export const initialNodes: any = [
  {
    id: "1",
    type: "input",
    data: { label: "Basic data" },
    position: { x: 0, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
    style: {
      borderColor: "#0041d0",
    },
  },
  {
    id: "2",
    type: "default",
    data: { label: "default" },
    position: { x: 200, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    type: "output",
    data: { label: "output" },
    position: { x: 400, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",

    style: { borderColor: "#ff0072" },
  },
];

export const initialEdges = [
  { id: "1", source: "1", target: "2" },
  { id: "2", source: "2", target: "3" },
];

// export const nodes: any = [
//   {
//     id: '1',
//     type: 'input',
//     data: {
//       label: (
//         <>
//           Welcome to <strong>React Flow!</strong>
//         </>
//       ),
//     },
//     position: { x: 250, y: 0 },
//   },
//   {
//     id: '2',
//     data: {
//       label: (
//         <>
//           This is a <strong>default node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     data: {
//       label: (
//         <>
//           This one has a <strong>custom style</strong>
//         </>
//       ),
//     },
//     position: { x: 400, y: 100 },
//     style: {
//       background: '#D6D5E6',
//       color: '#333',
//       border: '1px solid #222138',
//       width: 180,
//     },
//   },
//   {
//     id: '4',
//     position: { x: 250, y: 200 },
//     data: {
//       label: 'Another default node',
//     },
//   },
//   {
//     id: '5',
//     data: {
//       label: 'Node id: 5',
//     },
//     position: { x: 250, y: 325 },
//   },
//   {
//     id: '6',
//     type: 'output',
//     data: {
//       label: (
//         <>
//           An <strong>output node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 480 },
//   },
//   {
//     id: '7',
//     type: 'output',
//     data: { label: 'Another output node' },
//     position: { x: 400, y: 450 },
//   },
// ];

// export const edges = [
//   { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
//   { id: 'e1-3', source: '1', target: '3' },
//   {
//     id: 'e3-4',
//     source: '3',
//     target: '4',
//     animated: true,
//     label: 'animated edge',
//   },
//   {
//     id: 'e4-5',
//     source: '4',
//     target: '5',
//     label: 'edge with arrow head',
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },
//   {
//     id: 'e5-6',
//     source: '5',
//     target: '6',
//     type: 'smoothstep',
//     label: 'smooth step edge',
//   },
//   {
//     id: 'e5-7',
//     source: '5',
//     target: '7',
//     type: 'step',
//     style: { stroke: '#f6ab6c' },
//     label: 'a step edge',
//     animated: true,
//     labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
//   },
// ];

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

// "tracks": [
//   {
//     "slug": "alternative",
//     "steps": [
//       "personal_data",
//       "occupation",
//       "address",
//       "address1",
//       "address2",
//       "personal_documents",
//       "invoice_expiration"
//     ]
//   }
// ],
