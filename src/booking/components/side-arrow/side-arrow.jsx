import React from 'react';

const SideArrow = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 192 192"
        style={{ fill: '#000000' }}
        {...props}
    >
        <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: 'normal' }}
        >
            <path d="M0,192v-192h192v192z" fill="none" />
            <g fill="#000000">
                <path d="M63.9375,25.5375c-2.60431,0.00068 -4.94854,1.57923 -5.92852,3.99213c-0.97998,2.41289 -0.40029,5.17897 1.46602,6.99537l59.475,59.475l-59.475,59.475c-1.67193,1.60523 -2.34543,3.98891 -1.76074,6.23173c0.58469,2.24282 2.33619,3.99433 4.57901,4.57901c2.24282,0.58468 4.6265,-0.08881 6.23173,-1.76074l64,-64c2.49836,-2.49939 2.49836,-6.55061 0,-9.05l-64,-64c-1.20493,-1.23861 -2.85949,-1.9374 -4.5875,-1.9375z" />
            </g>
        </g>
    </svg>
);

export default SideArrow;
