import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export interface IconProps {
  size?: string;
  color?: string;
}

export const Transfer = ({ size = "32", color = "#222128" }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_38_6511)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.17995 -6.6869e-07C7.49995 0.459999 6.27995 3.46 5.56995 4.43C5.53924 4.48883 5.5289 4.55618 5.54055 4.62151C5.5522 4.68684 5.58519 4.74646 5.63434 4.79105C5.6835 4.83563 5.74605 4.86266 5.81221 4.8679C5.87836 4.87313 5.94439 4.85629 5.99995 4.82C6.92332 3.6087 7.92549 2.45954 8.99995 1.38C8.53457 4.98005 8.38733 8.6141 8.55995 12.24C8.55995 12.65 8.47995 13.02 8.78995 12.99C9.21995 13.16 9.16995 12.76 9.21995 12.27C9.68667 8.77401 9.84061 5.24335 9.67995 1.72C10.5538 2.86965 11.3457 4.0793 12.0499 5.34C12.0499 5.43017 12.0858 5.51665 12.1495 5.58042C12.2133 5.64418 12.2998 5.68 12.3899 5.68C12.4801 5.68 12.5666 5.64418 12.6304 5.58042C12.6941 5.51665 12.7299 5.43017 12.7299 5.34C12.7299 5 10.7299 0.689999 9.72995 0.0899993C9.56462 -0.00856349 9.36806 -0.0407282 9.17995 -6.6869e-07Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5299 12.45C14.2784 13.8817 14.1181 15.328 14.0499 16.78C13.9999 17.78 14.0499 18.78 14.0499 19.64C14.0499 22.4 14.2499 22.23 13.9599 21.89C10.8499 18.17 11.3299 18.46 11.1299 18.41C10.9299 18.36 10.6299 18.47 10.7899 18.88C11.5769 20.2999 12.4416 21.6753 13.3799 23C14.1099 24 14.5499 24.43 15.3099 23.5C15.8799 22.8 18.5199 18.73 18.5099 18.17C18.5099 18.0798 18.4741 17.9934 18.4103 17.9296C18.3466 17.8658 18.2601 17.83 18.1699 17.83C18.0797 17.83 17.9933 17.8658 17.9295 17.9296C17.8657 17.9934 17.8299 18.0798 17.8299 18.17C17.2499 19.03 16.2499 20.54 14.8299 22.29C15.0199 19.88 15.1199 19.46 15.1799 17.13C15.2299 15.43 15.0699 12.86 15.1099 12.62C15.1211 12.5819 15.1246 12.542 15.1204 12.5026C15.1161 12.4631 15.1041 12.4249 15.0851 12.39C15.066 12.3552 15.0403 12.3245 15.0094 12.2996C14.9785 12.2747 14.943 12.2562 14.9049 12.245C14.8668 12.2338 14.8269 12.2303 14.7875 12.2346C14.748 12.2388 14.7098 12.2508 14.675 12.2698C14.6401 12.2889 14.6094 12.3146 14.5845 12.3455C14.5596 12.3764 14.5411 12.4119 14.5299 12.45Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_38_6511">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
