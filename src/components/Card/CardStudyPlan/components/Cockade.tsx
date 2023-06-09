import { useTheme } from "@material-ui/core";
import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

// Styled
// TODO: elevation
// TODO: shadow color
// TODO: dynamic logo

const StyledCockade = styled.svg`
  filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.3));
  /* filter: drop-shadow(${({ theme }) => theme.shadows[1]}); */
  #Cockade-and-badge {
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.2));
  }
`;

export const Cockade: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledCockade
      viewBox="0 0 960 960"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="Cockade" fill="none" d="M0 0h960v960H0z" />
      <clipPath id="_clip1">
        <path id="Cockade1" d="M0 0h960v960H0z" />
      </clipPath>
      <g clipPath="url(#_clip1)">
        <g id="Ribbon">
          <path
            id="ribbon-bg"
            d="M321.259 380v520l159.371-97.5L640 900V380H321.259Z"
            fill={
              theme.palette.type === "dark"
                ? lighten(0.1, theme.palette.background.paper)
                : darken(0.15, theme.palette.background.paper)
            }
          />
        </g>
        <g id="Cockade-and-badge">
          <g id="Cockade2">
            <path
              id="cockade-bg"
              d="M463.473 67.932a21.185 21.185 0 0 1 33.054 0l42.875 53.469a24.893 24.893 0 0 0 28.454 7.624l63.865-24.868a21.186 21.186 0 0 1 28.626 16.527l10.396 67.743a24.9 24.9 0 0 0 7.003 13.827 24.9 24.9 0 0 0 13.827 7.003l67.743 10.396a21.185 21.185 0 0 1 16.527 28.626l-24.868 63.865a24.893 24.893 0 0 0 7.624 28.454l53.469 42.875a21.185 21.185 0 0 1 0 33.054l-53.469 42.875a24.893 24.893 0 0 0-7.624 28.454l24.868 63.865a21.186 21.186 0 0 1-16.527 28.626l-67.743 10.396a24.9 24.9 0 0 0-13.827 7.003 24.9 24.9 0 0 0-7.003 13.827l-10.396 67.743a21.185 21.185 0 0 1-28.626 16.527l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.186 21.186 0 0 1-28.626-16.527l-10.396-67.743a24.9 24.9 0 0 0-7.003-13.827 24.9 24.9 0 0 0-13.827-7.003l-67.743-10.396a21.185 21.185 0 0 1-16.527-28.626l24.868-63.865a24.893 24.893 0 0 0-7.624-28.454l-53.469-42.875a21.185 21.185 0 0 1 0-33.054l53.469-42.875a24.893 24.893 0 0 0 7.624-28.454l-24.868-63.865a21.186 21.186 0 0 1 16.527-28.626l67.743-10.396a24.9 24.9 0 0 0 13.827-7.003 24.9 24.9 0 0 0 7.003-13.827l10.396-67.743a21.185 21.185 0 0 1 28.626-16.527l63.865 24.868a24.893 24.893 0 0 0 28.454-7.624l42.875-53.469Z"
              fill={
                theme.palette.type === "dark"
                  ? lighten(0.25, theme.palette.background.paper)
                  : darken(0.025, theme.palette.background.paper)
              }
            />
            <path
              id="cockade-shadow-1"
              d="M650 105.551a21.185 21.185 0 0 1 10.347 15.133l10.396 67.743a24.9 24.9 0 0 0 7.003 13.827 24.9 24.9 0 0 0 13.827 7.003l67.743 10.396a21.185 21.185 0 0 1 16.527 28.626l-24.868 63.865a24.893 24.893 0 0 0 7.624 28.454l53.469 42.875a21.185 21.185 0 0 1 0 33.054l-53.469 42.875a24.893 24.893 0 0 0-7.624 28.454l24.868 63.865a21.186 21.186 0 0 1-16.527 28.626l-67.743 10.396a24.9 24.9 0 0 0-13.827 7.003 24.9 24.9 0 0 0-7.003 13.827l-10.396 67.743a21.185 21.185 0 0 1-28.626 16.527l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.186 21.186 0 0 1-28.626-16.527l-10.396-67.743a24.9 24.9 0 0 0-7.003-13.827 24.9 24.9 0 0 0-13.827-7.003l-67.743-10.396a21.185 21.185 0 0 1-16.527-28.626l24.868-63.865a24.893 24.893 0 0 0-7.624-28.454l-53.469-42.875a21.185 21.185 0 0 1 0-33.054l53.469-42.875a24.893 24.893 0 0 0 7.624-28.454l-24.868-63.865a21.186 21.186 0 0 1 16.527-28.626l67.743-10.396a24.9 24.9 0 0 0 13.827-7.003 24.9 24.9 0 0 0 7.003-13.827l10.396-67.743A21.185 21.185 0 0 1 310 105.551l170 295.22 170-295.22Z"
              fill="url(#_Linear4)"
            />
            <path
              id="cockade-shadow-2"
              d="M774.449 230a21.186 21.186 0 0 1 1.394 18.279l-24.868 63.865a24.893 24.893 0 0 0 7.624 28.454l53.469 42.875a21.185 21.185 0 0 1 0 33.054l-53.469 42.875a24.893 24.893 0 0 0-7.624 28.454l24.868 63.865a21.186 21.186 0 0 1-16.527 28.626l-67.743 10.396a24.9 24.9 0 0 0-13.827 7.003 24.9 24.9 0 0 0-7.003 13.827l-10.396 67.743a21.185 21.185 0 0 1-28.626 16.527l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.186 21.186 0 0 1-28.626-16.527l-10.396-67.743a24.9 24.9 0 0 0-7.003-13.827 24.9 24.9 0 0 0-13.827-7.003l-67.743-10.396a21.185 21.185 0 0 1-16.527-28.626l24.868-63.865a24.893 24.893 0 0 0-7.624-28.454l-53.469-42.875a21.185 21.185 0 0 1 0-33.054l53.469-42.875a24.893 24.893 0 0 0 7.624-28.454l-24.868-63.865A21.186 21.186 0 0 1 185.551 230l295.118 171.159L774.449 230Z"
              fill="url(#_Linear5)"
            />
            <path
              id="cockade-shadow-3"
              d="M820 400a21.185 21.185 0 0 1-7.932 16.527l-53.469 42.875a24.893 24.893 0 0 0-7.624 28.454l24.868 63.865a21.186 21.186 0 0 1-16.527 28.626l-67.743 10.396a24.9 24.9 0 0 0-13.827 7.003 24.9 24.9 0 0 0-7.003 13.827l-10.396 67.743a21.185 21.185 0 0 1-28.626 16.527l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.186 21.186 0 0 1-28.626-16.527l-10.396-67.743a24.9 24.9 0 0 0-7.003-13.827 24.9 24.9 0 0 0-13.827-7.003l-67.743-10.396a21.185 21.185 0 0 1-16.527-28.626l24.868-63.865a24.893 24.893 0 0 0-7.624-28.454l-53.469-42.875A21.185 21.185 0 0 1 140 400h680Z"
              fill="url(#_Linear6)"
            />
            <path
              id="cockade-shadow-4"
              d="M774.449 570a21.185 21.185 0 0 1-15.133 10.347l-67.743 10.396a24.9 24.9 0 0 0-13.827 7.003 24.9 24.9 0 0 0-7.003 13.827l-10.396 67.743a21.185 21.185 0 0 1-28.626 16.527l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.186 21.186 0 0 1-28.626-16.527l-10.396-67.743a24.9 24.9 0 0 0-7.003-13.827 24.9 24.9 0 0 0-13.827-7.003l-67.743-10.396A21.185 21.185 0 0 1 185.551 570L480 400l294.449 170Z"
              fill="url(#_Linear7)"
            />
            <path
              id="cockade-shadow-5"
              d="M650 694.449a21.186 21.186 0 0 1-18.279 1.394l-63.865-24.868a24.893 24.893 0 0 0-28.454 7.624l-42.875 53.469a21.185 21.185 0 0 1-33.054 0l-42.875-53.469a24.893 24.893 0 0 0-28.454-7.624l-63.865 24.868a21.188 21.188 0 0 1-16.941-.684L480 400l170 294.449Z"
              fill="url(#_Linear8)"
            />
          </g>
          <circle
            id="Badge-after-bg"
            cx="480"
            cy="400"
            r="212.5"
            fill={
              theme.palette.type === "dark"
                ? lighten(0.2, theme.palette.background.paper)
                : darken(0.025, theme.palette.background.paper)
            }
          />
          <circle
            id="Badge-primary"
            cx="480"
            cy="400"
            r="191.25"
            fill={theme.palette.primary.main}
          />
          <path
            id="we"
            d="M418.403 403.721a767.306 767.306 0 0 1-6.587 24.265 1002.924 1002.924 0 0 1-7.353 24.266h-17.984c-1.864-4.497-3.884-9.854-6.06-16.069a739.122 739.122 0 0 1-6.761-20.329c-2.327-7.34-4.71-15.108-7.15-23.302a1092.426 1092.426 0 0 1-7.07-24.827h24.332c.831 3.859 1.74 8.064 2.727 12.614.987 4.551 2.026 9.238 3.118 14.061a827.474 827.474 0 0 0 3.432 14.545 503.545 503.545 0 0 0 3.663 14.061 716.364 716.364 0 0 0 3.952-14.471c1.293-4.932 2.532-9.78 3.719-14.543 1.186-4.767 2.323-9.374 3.409-13.821a447.302 447.302 0 0 0 2.867-12.453h16.734c.825 3.859 1.755 8.01 2.788 12.453 1.033 4.444 2.118 9.051 3.255 13.821a1246.32 1246.32 0 0 0 3.564 14.55 467.931 467.931 0 0 0 3.875 14.471c1.245-4.5 2.492-9.187 3.739-14.061a537.972 537.972 0 0 0 3.509-14.545c1.09-4.823 2.129-9.51 3.117-14.061.988-4.55 1.898-8.755 2.729-12.614h24.022a1150.74 1150.74 0 0 1-7.074 24.827 1307.971 1307.971 0 0 1-7.147 23.298c-2.331 7.34-4.611 14.116-6.837 20.329-2.227 6.212-4.273 11.569-6.138 16.069h-17.979a3265.59 3265.59 0 0 1-7.593-24.266 496.642 496.642 0 0 1-6.818-24.268Zm66.093 6.911a53.372 53.372 0 0 1 3.328-19.68 42.391 42.391 0 0 1 8.756-14.061 36.324 36.324 0 0 1 12.474-8.518 37.849 37.849 0 0 1 14.49-2.894c11.569 0 20.712 3.669 27.429 11.008 6.716 7.339 10.074 18.132 10.073 32.381 0 1.393-.052 2.92-.155 4.58-.103 1.66-.206 3.133-.308 4.419h-52.384a16.033 16.033 0 0 0 6.656 11.731c3.927 2.895 9.195 4.342 15.807 4.342 4.187.004 8.365-.4 12.475-1.206a45.814 45.814 0 0 0 9.996-2.972l3.1 19.444a31.294 31.294 0 0 1-4.961 1.929 62.832 62.832 0 0 1-6.895 1.687c-2.534.483-5.246.885-8.135 1.206a78.727 78.727 0 0 1-8.683.482 49.76 49.76 0 0 1-19.139-3.375 36.028 36.028 0 0 1-21.384-23.141 56.916 56.916 0 0 1-2.54-17.362Zm54.237-9.16a25.578 25.578 0 0 0-1.013-5.946 15.083 15.083 0 0 0-2.633-5.143 13.467 13.467 0 0 0-11.237-5.141 15.032 15.032 0 0 0-6.656 1.364 13.872 13.872 0 0 0-4.65 3.618 16.34 16.34 0 0 0-2.866 5.222 35.291 35.291 0 0 0-1.473 6.027l30.528-.001Zm61.829 39.532c0 4.824-1.472 8.493-4.416 11.008-5.686 5.012-14.306 5.012-19.992 0-2.943-2.517-4.415-6.186-4.415-11.008 0-4.821 1.472-8.491 4.415-11.008 5.686-5.011 14.306-5.011 19.992 0 2.945 2.518 4.417 6.188 4.416 11.008Z"
            opacity={0.35}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="_Linear2"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 600 -600 0 400.315 380)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.1}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id="_Linear4"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 506.949 -135.836 0 480 105.551)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.075}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0.075}
          />
        </linearGradient>
        <linearGradient
          id="_Linear5"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 361.25 -120.417 0 480 230)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.075}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0.075}
          />
        </linearGradient>
        <linearGradient
          id="_Linear6"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 680 -340 0 480 400)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.075}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0.075}
          />
        </linearGradient>
        <linearGradient
          id="_Linear7"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 680 -294.449 0 480 400)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.075}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0.075}
          />
        </linearGradient>
        <linearGradient
          id="_Linear8"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 680 -169.331 0 480.669 400)"
        >
          <stop
            offset="0"
            stopColor={theme.palette.common.black}
            stopOpacity={0.075}
          />
          <stop
            offset="1"
            stopColor={theme.palette.background.paper}
            stopOpacity={0.075}
          />
        </linearGradient>
      </defs>
    </StyledCockade>
  );
};
