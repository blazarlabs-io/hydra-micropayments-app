import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export interface IconProps {
  size?: number;
  color?: string;
}

export const Nfc = ({ size = 24, color = "#222128" }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_24_4499)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9 11.72C15.9443 11.7977 16.0166 11.8554 16.1022 11.8815C16.1877 11.9075 16.28 11.8998 16.36 11.86C16.4002 11.8398 16.4361 11.8119 16.4655 11.7778C16.4948 11.7437 16.5172 11.7041 16.5311 11.6613C16.5451 11.6185 16.5504 11.5734 16.5468 11.5285C16.5431 11.4837 16.5306 11.44 16.51 11.4C16.2676 10.8517 15.914 10.3597 15.4717 9.95523C15.0293 9.55071 14.5077 9.24245 13.94 9.04998C13.4504 8.8828 12.9373 8.79503 12.42 8.78998C11.9088 8.78077 11.3993 8.85163 10.91 8.99998C9.78951 9.36104 8.8194 10.0816 8.15 11.05C8.09439 11.1077 8.06332 11.1848 8.06332 11.265C8.06332 11.3452 8.09439 11.4222 8.15 11.48C8.21241 11.5288 8.29162 11.551 8.37031 11.5416C8.449 11.5322 8.52079 11.4921 8.57 11.43C9.26686 10.7219 10.1636 10.2438 11.14 10.06C11.5437 9.96903 11.9561 9.92209 12.37 9.91998C12.7747 9.9193 13.1779 9.96969 13.57 10.07C14.0514 10.1687 14.5071 10.3664 14.9082 10.6504C15.3093 10.9344 15.647 11.2987 15.9 11.72Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.38 8.99998C5.70306 7.46334 7.47146 6.37643 9.44 5.88998C10.2751 5.66538 11.1353 5.54777 12 5.53998C12.849 5.52707 13.6961 5.62455 14.52 5.82998C16.4807 6.32542 18.2174 7.46677 19.45 9.06998C19.4769 9.1061 19.5107 9.13655 19.5494 9.15962C19.5881 9.18268 19.6309 9.19789 19.6755 9.20439C19.7201 9.21089 19.7655 9.20855 19.8092 9.1975C19.8528 9.18645 19.8939 9.1669 19.93 9.13998C19.9661 9.11306 19.9966 9.07929 20.0196 9.0406C20.0427 9.00191 20.0579 8.95905 20.0644 8.91448C20.0709 8.86991 20.0686 8.82449 20.0575 8.78083C20.0465 8.73716 20.0269 8.6961 20 8.65998C18.7678 6.81027 16.9344 5.44313 14.81 4.78998C13.8926 4.51318 12.9382 4.37828 11.98 4.38998C11.0262 4.39955 10.0791 4.55121 9.17 4.83998C7.04503 5.50165 5.19446 6.83954 3.9 8.64998C3.86605 8.71377 3.85626 8.78768 3.87244 8.85811C3.88862 8.92854 3.92968 8.99077 3.98807 9.03334C4.04646 9.07592 4.11826 9.09599 4.19027 9.08986C4.26227 9.08373 4.32965 9.05182 4.38 8.99998Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.89 6.72999C22.16 3.61999 19.46 1.50999 16.15 0.55999C14.8473 0.197379 13.5022 0.00907157 12.15 -9.88302e-06C10.7993 -0.00755845 9.45384 0.167356 8.15 0.51999C4.94 1.41999 2.22 3.40999 1.15 6.44999C1.12324 6.52441 1.12593 6.60625 1.15754 6.67876C1.18914 6.75126 1.24726 6.80894 1.32 6.83999C1.35738 6.8543 1.39725 6.86098 1.43726 6.85964C1.47726 6.8583 1.5166 6.84897 1.55294 6.83219C1.58928 6.81542 1.6219 6.79154 1.64888 6.76197C1.67585 6.73239 1.69663 6.69772 1.71 6.65999C2.81 3.92999 5.42 2.29999 8.39 1.58999C9.61436 1.29303 10.8701 1.14529 12.13 1.14999C13.3868 1.15177 14.6389 1.30283 15.86 1.59999C18.86 2.36999 21.45 4.10999 22.23 6.89999C22.2536 6.98822 22.3107 7.06374 22.3891 7.11045C22.4676 7.15715 22.5612 7.17134 22.65 7.14999C22.6935 7.13841 22.7342 7.11832 22.7699 7.09088C22.8055 7.06344 22.8354 7.02919 22.8577 6.99012C22.8801 6.95105 22.8944 6.90794 22.8999 6.86329C22.9055 6.81864 22.9021 6.77333 22.89 6.72999Z"
          fill={color}
        />
        <Path d="M4.5 20.5V14L8 20.5V14" stroke={color} />
        <Path d="M11 20.5V14.5H15" stroke={color} />
        <Path d="M11 17H14" stroke={color} />
        <Path
          d="M19 14.4999C19 14.4999 16 13.5656 16 17.1849C16 20.8042 19 19.8994 19 19.8994"
          stroke={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_24_4499">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
