import React from 'react';

type Props = { children: string | Element };

const CallOut: React.RFC<Props> = ({ children }) => (
  <div className="p-10 text-white bg-black">{children}</div>
);

export default CallOut;
