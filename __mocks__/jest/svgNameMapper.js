import React, { forwardRef } from 'react';

const SVGMock = forwardRef<SVGSVGElement>(
  (props, ref) => (
    <svg
      name="SVGMock"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="IconSVG"
      focusable="false"
      aria-hidden="true"
      data-testid="mock-icon"
      ref={ref}
      {...props}
    ></svg>
  )
);

export default SVGMock;