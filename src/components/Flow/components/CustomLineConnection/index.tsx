import React from 'react';

const CustomLineConnection =  ({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  connectionLineType,
  connectionLineStyle,
}: any) => {
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={2}
        d={`M${sourceX},${sourceY} C ${sourceX} ${targetY} ${sourceX} ${targetY} ${targetX},${targetY}`}
      />
      <circle cx={targetX} cy={targetY} fill="#fff" r={5} stroke="#222" strokeWidth={1.5} />
    </g>
  );
};

export default CustomLineConnection