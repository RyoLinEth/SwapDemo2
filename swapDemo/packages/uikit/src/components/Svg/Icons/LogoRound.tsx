import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import logoIcon from "../logo.svg";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <img {...props} src={logoIcon?.src ?? ''} alt="logo" style={{border: '1px solid #fff', borderRadius: '50%', background: '#fff'}} />
    // <Svg viewBox="0 0 96 96" {...props}>
    //   <circle cx={48} cy={48} r={48} fill="#53DEE9" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
    //     fill="#D1884F"
    //   />
    //   <path
    //     d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
    //     fill="#FEDC90"
    //   />
    //   <path
    //     d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
    //     fill="#633001"
    //   />
    //   <defs>
    //     <linearGradient id="paint0_linear_10493" x1={48} y1={0} x2={48} y2={96} gradientUnits="userSpaceOnUse">
    //       <stop stopColor="#53DEE9" />
    //       <stop offset={1} stopColor="#F8B711" />
    //     </linearGradient>
    //   </defs>
    // </Svg>
  );
};

export default Icon;
