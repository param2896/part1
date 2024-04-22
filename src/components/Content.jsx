/* eslint-disable react/prop-types */

import Part from './Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <div key={p.name}>
          <Part part={p} />
        </div>
      ))}
    </div>
  );
};
export default Content;
