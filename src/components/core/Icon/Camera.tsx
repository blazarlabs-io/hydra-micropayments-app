import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export interface IconProps {
  size?: string;
  color?: string;
}

export const Camera = ({ size = "32", color = "#222128" }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1033_3635)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 14C23.91 7.31001 23.95 7.69001 23.85 7.30001C23.59 6.44001 23 6.16001 22 5.93001C18.61 5.14001 11.42 5.68001 7.99999 6.00001C7.99999 5.27001 7.82999 3.71001 7.84999 3.82001C7.70999 3.06001 6.63999 3.17001 6.34999 3.12001C5.50238 2.99866 4.63913 3.04624 3.80999 3.26001C2.39999 3.74001 2.50999 4.71001 2.80999 6.18001H2.71999C2.46143 6.07483 2.18371 6.02494 1.9047 6.03355C1.62569 6.04216 1.35158 6.10908 1.09999 6.23001C0.269993 6.72001 0.169993 7.60001 0.0699932 8.55001C-0.0334553 9.97017 0.00338967 11.3971 0.179993 12.81C0.156085 14.7858 0.273048 16.7608 0.529993 18.72C0.525451 19.103 0.625736 19.4799 0.819993 19.81C1.63999 20.92 4.09999 20.53 5.81999 20.71C10.11 21.14 13.99 20.84 18.09 20.86C19.8 20.86 22.52 21.29 23.4 19.97C23.6812 19.4142 23.8349 18.8027 23.85 18.18C24.0225 16.7938 24.0727 15.395 24 14ZM3.57999 4.56001C3.80999 4.18001 5.57999 4.18001 6.19999 4.23001C6.81999 4.28001 6.86999 4.00001 6.99999 4.48001C7.12316 4.98022 7.21335 5.48798 7.26999 6.00001C5.38999 6.00001 6.62999 5.90001 3.43999 6.10001C3.38953 5.58244 3.43702 5.05999 3.57999 4.56001ZM22.72 18C22.7012 18.46 22.6031 18.9134 22.43 19.34C21.99 20 19.3 19.71 18.09 19.71C9.82999 19.71 14.72 20.09 2.64999 19.64C1.37999 19.5 1.53999 19.39 1.38999 18.58C1.03999 15.58 0.389993 10.08 0.839993 7.87001C0.936128 7.66821 1.07559 7.49009 1.24844 7.34836C1.42129 7.20662 1.62327 7.10475 1.83999 7.05001C3.88429 6.81364 5.94285 6.72341 7.99999 6.78001C11.16 6.54001 18.45 6.09001 21.75 6.92001C22.95 7.22001 22.81 7.44001 22.83 7.84001C22.85 8.24001 22.83 8.25001 22.83 13.97C22.9044 15.3141 22.8676 16.662 22.72 18Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.04998 14.55L7.04998 14.47C8.46998 14.36 8.16998 13.77 7.04998 13.69C4.25998 13.45 5.11998 13.31 2.86998 13.53C2.44418 13.5133 2.01931 13.5813 1.61998 13.73C1.51689 13.7832 1.43409 13.8687 1.38429 13.9735C1.33448 14.0782 1.32042 14.1964 1.34426 14.31C1.3681 14.4235 1.42852 14.526 1.51626 14.6019C1.604 14.6778 1.71421 14.7228 1.82998 14.73C3.23777 14.8803 4.6601 14.8196 6.04998 14.55Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.74997 10.05C6.25618 10.0805 6.76376 10.0805 7.26997 10.05C7.33855 10.0429 7.40366 10.0163 7.45754 9.97329C7.51143 9.93028 7.55183 9.87271 7.57395 9.80741C7.59607 9.7421 7.59897 9.67183 7.58231 9.60492C7.56565 9.53802 7.53013 9.47731 7.47997 9.43001C6.91562 9.26113 6.33626 9.14727 5.74997 9.09001C4.25008 8.94834 2.73754 9.02582 1.25997 9.32001C0.699972 9.54001 0.839972 10.01 1.52997 10.15C2.93503 10.2996 4.35358 10.266 5.74997 10.05Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.63996 12.17C8.04996 12.34 7.63996 11.33 7.13996 11.46C7.13996 11.41 6.82996 11.46 6.78996 11.41L5.78996 11.21C4.83925 11.11 3.88068 11.11 2.92996 11.21C2.47584 11.2553 2.02497 11.3287 1.57996 11.43C1.04996 11.61 1.11996 11.93 1.57996 12.16C4.41996 12.45 4.23996 12.12 6.63996 12.17Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.47 7.99999C17.4067 7.93947 17.3226 7.9057 17.235 7.9057C17.1475 7.9057 17.0633 7.93947 17 7.99999C16.7 8.29999 17.07 8.59999 17.4 8.79999C18.0562 9.04961 18.6525 9.43464 19.15 9.92999C19.6628 10.4822 19.9882 11.1821 20.08 11.93C20.2347 13.0108 20.177 14.1113 19.91 15.17C19.7893 15.5668 19.5481 15.9163 19.22 16.17C18.8805 16.4277 18.5191 16.6552 18.14 16.85C15.61 18.15 10.8 16.8 10.71 14C10.7036 13.123 10.8283 12.2501 11.08 11.41C11.2102 10.9449 11.4345 10.5114 11.7389 10.1364C12.0434 9.76144 12.4215 9.45293 12.85 9.22999C14.49 8.38999 15.74 8.79999 15.97 8.58999C15.9985 8.5629 16.0211 8.53032 16.0366 8.49422C16.052 8.45813 16.06 8.41926 16.06 8.37999C16.06 8.34071 16.052 8.30185 16.0366 8.26575C16.0211 8.22965 15.9985 8.19707 15.97 8.16999C15.83 7.87999 14.52 7.99999 14.44 7.99999C13.7562 8.0326 13.0871 8.20991 12.4769 8.52019C11.8667 8.83047 11.3292 9.26667 10.9 9.79999C10.355 10.5755 9.9926 11.4644 9.84002 12.4C9.61013 13.2921 9.61013 14.2279 9.84002 15.12C10.84 17.73 14.53 18.86 17.22 18.32C18.1912 18.0738 19.0917 17.6047 19.85 16.95C21.05 15.95 21.09 14.57 21.06 13.04C21 8.86999 18 8.43999 17.47 7.99999Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.12 12.08C12.98 13.08 12.35 14.72 13.5 15.3C13.8582 15.4221 14.232 15.4929 14.61 15.51C15.1445 15.6057 15.6871 15.6492 16.23 15.64C16.6811 15.6743 17.1297 15.5474 17.496 15.2818C17.8623 15.0163 18.1224 14.6294 18.23 14.19C18.2721 13.4524 18.1945 12.7128 18 12C17.74 9.99999 17.22 10.18 14.3 10.29C13 10.2 13.19 11.61 13.12 12.08ZM13.88 10.87C14.31 11.01 16.64 10.87 16.94 11.21C17.24 14.33 17.59 14.69 14.73 14.42C14.52 14.42 13.89 14.42 13.84 14.34C13.46 13.68 14.09 11.28 13.88 10.87Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1033_3635">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
