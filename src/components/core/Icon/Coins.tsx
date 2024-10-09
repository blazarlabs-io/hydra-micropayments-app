import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export interface IconProps {
  size?: string;
  color?: string;
}

export const Coins = ({ size = "32", color = "#222128" }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <G clip-path="url(#clip0_24_4484)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.48665 6.23997C5.66843 6.27641 5.85202 6.30311 6.03665 6.31997C6.04523 6.38001 6.07179 6.43603 6.11285 6.48066C6.15391 6.52529 6.20754 6.55643 6.26665 6.56997C6.68044 6.66439 7.07577 6.82658 7.43665 7.04997C7.77123 7.25573 8.02531 7.5698 8.15665 7.93997C8.19526 8.05306 8.21879 8.17074 8.22665 8.28997V8.92997V9.39997C8.22361 9.50511 8.25669 9.60811 8.32038 9.69181C8.38406 9.77551 8.47451 9.83487 8.57665 9.85997C8.63652 9.87458 8.69876 9.87674 8.7595 9.8663C8.82025 9.85587 8.8782 9.83307 8.92976 9.79931C8.98133 9.76556 9.02541 9.72157 9.05928 9.67008C9.09315 9.61859 9.11608 9.56069 9.12665 9.49997V8.91997C9.18763 8.71931 9.26801 8.52506 9.36665 8.33997C9.44923 8.16346 9.54976 7.99591 9.66665 7.83997C9.83788 7.64153 10.0406 7.47261 10.2666 7.33997C10.5148 7.19085 10.772 7.05725 11.0366 6.93997C11.1866 6.86997 11.5466 6.77997 11.7566 6.65997C11.8878 6.59947 12.0014 6.50655 12.0866 6.38997C12.1664 6.29271 12.2049 6.16801 12.1936 6.0427C12.1824 5.9174 12.1225 5.80151 12.0266 5.71997C11.9295 5.62555 11.8019 5.56882 11.6666 5.55997C11.5101 5.57015 11.3531 5.57015 11.1966 5.55997L10.6666 5.41997C10.4972 5.36114 10.3332 5.28753 10.1766 5.19997C9.82904 5.05972 9.54216 4.80118 9.36665 4.46997C9.1914 4.07124 9.07033 3.65084 9.00665 3.21997C8.98234 3.10248 8.91888 2.99672 8.82665 2.91997C8.71665 2.84997 8.23665 2.70997 8.16665 3.20997V3.82997C8.14932 4.01665 8.11245 4.20099 8.05665 4.37997C8.01622 4.55626 7.95583 4.72736 7.87665 4.88997C7.78557 5.07834 7.6556 5.24525 7.49529 5.3797C7.33498 5.51415 7.14799 5.61308 6.94665 5.66997C6.4931 5.7889 6.01985 5.81273 5.55665 5.73997C5.52382 5.73538 5.4904 5.73729 5.45831 5.74561C5.42622 5.75393 5.39609 5.76848 5.36962 5.78845C5.34316 5.80841 5.32088 5.83339 5.30407 5.86197C5.28726 5.89054 5.27625 5.92214 5.27165 5.95497C5.26705 5.9878 5.26897 6.02122 5.27729 6.05331C5.2856 6.0854 5.30016 6.11554 5.32012 6.142C5.34009 6.16847 5.36507 6.19074 5.39364 6.20755C5.42221 6.22436 5.45382 6.23538 5.48665 6.23997ZM7.43665 6.13997C7.88306 5.96486 8.2544 5.6395 8.48665 5.21997L8.66665 4.99997L8.78665 5.20997C9.03764 5.58793 9.38213 5.89453 9.78665 6.09997C9.92833 6.17997 10.0753 6.25014 10.2266 6.30997C10.0042 6.42441 9.79032 6.55475 9.58665 6.69997C9.34871 6.8728 9.13947 7.08203 8.96665 7.31997C8.89771 7.4001 8.83738 7.48725 8.78665 7.57997C8.61352 7.24043 8.36356 6.94596 8.05665 6.71997C7.79327 6.52914 7.50358 6.37756 7.19665 6.26997L7.43665 6.13997Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.8166 13.62C21.8166 11.98 21.6566 10.53 21.6166 9.82004C21.614 9.78209 21.6027 9.74525 21.5836 9.71232C21.5646 9.6794 21.5382 9.65126 21.5066 9.63004C21.4617 9.43381 21.369 9.25173 21.2366 9.10004C21.0525 8.91234 20.8356 8.75983 20.5966 8.65004C20.2797 8.49983 19.943 8.39546 19.5966 8.34004C19.5591 8.33292 19.5205 8.33355 19.4832 8.34192C19.4459 8.35029 19.4107 8.3662 19.3797 8.38869C19.3488 8.41117 19.3228 8.43975 19.3034 8.47266C19.2839 8.50557 19.2714 8.54212 19.2666 8.58004C19.2595 8.61687 19.2598 8.65477 19.2675 8.69148C19.2752 8.72819 19.2903 8.76297 19.3118 8.79376C19.3332 8.82454 19.3606 8.8507 19.3924 8.87067C19.4242 8.89065 19.4596 8.90404 19.4966 8.91004C19.7424 8.96005 19.9809 9.04068 20.2066 9.15004C20.4175 9.24072 20.6054 9.37739 20.7566 9.55004C20.8045 9.61547 20.8382 9.69021 20.8554 9.76944C20.8726 9.84867 20.8731 9.93064 20.8566 10.01C20.8511 10.0848 20.8294 10.1574 20.7932 10.223C20.757 10.2886 20.707 10.3456 20.6466 10.39C20.2434 10.6361 19.7876 10.7834 19.3166 10.82C18.5638 10.9271 17.7995 10.9271 17.0466 10.82C16.9013 10.8006 16.7576 10.7705 16.6166 10.73C16.4736 10.689 16.3333 10.6389 16.1966 10.58L15.6666 10.29C15.5902 10.2459 15.5233 10.1869 15.4701 10.1165C15.4168 10.046 15.3783 9.96564 15.3566 9.88004C15.3639 9.77512 15.3957 9.67337 15.4496 9.58303C15.5034 9.4927 15.5778 9.4163 15.6666 9.36004C16.0434 9.06917 16.4756 8.8582 16.9366 8.74004C17.3998 8.60057 17.8876 8.56305 18.3666 8.63004C18.3988 8.63661 18.432 8.63677 18.4642 8.63053C18.4964 8.62428 18.5271 8.61175 18.5545 8.59364C18.5819 8.57553 18.6055 8.55221 18.6239 8.52499C18.6422 8.49778 18.6551 8.46722 18.6616 8.43504C18.6682 8.40287 18.6684 8.36972 18.6621 8.33748C18.6559 8.30524 18.6433 8.27455 18.6252 8.24716C18.6071 8.21976 18.5838 8.19621 18.5566 8.17783C18.5294 8.15945 18.4988 8.14661 18.4666 8.14004C17.9171 8.01452 17.3462 8.01452 16.7966 8.14004C16.2364 8.2368 15.6999 8.4405 15.2166 8.74004C15.0151 8.85724 14.8446 9.02098 14.7194 9.21757C14.5941 9.41416 14.5177 9.63789 14.4966 9.87004C14.4802 10.2109 14.5906 10.5458 14.8066 10.81C14.6766 11.69 14.5566 12.81 14.4966 14C14.4966 14.55 14.4966 15.11 14.4366 15.68C14.3766 16.25 14.4366 16.81 14.4366 17.36C14.4366 17.91 14.4366 18.36 14.5066 18.88C14.4555 18.8463 14.402 18.8162 14.3466 18.79C14.0297 18.6398 13.693 18.5355 13.3466 18.48C13.2735 18.4722 13.2001 18.4924 13.1413 18.5367C13.0826 18.5809 13.0428 18.6458 13.0301 18.7183C13.0174 18.7907 13.0327 18.8653 13.0729 18.9269C13.1131 18.9885 13.1752 19.0325 13.2466 19.05C13.4924 19.1 13.7309 19.1807 13.9566 19.29C14.1691 19.3831 14.3598 19.5193 14.5166 19.69C14.5575 19.7501 14.5848 19.8184 14.5966 19.89V19.95C14.5966 20.1 14.5266 20.25 14.4966 20.41L14.3866 20.53C13.9873 20.7767 13.5347 20.9241 13.0666 20.96C12.3104 21.0671 11.5429 21.0671 10.7866 20.96C10.6366 20.96 10.4966 20.9 10.3566 20.87C10.2164 20.8306 10.0793 20.7804 9.94664 20.72L9.40664 20.47C9.31781 20.4241 9.24141 20.3574 9.18395 20.2756C9.12648 20.1937 9.08967 20.0992 9.07664 20C9.08464 19.894 9.11672 19.7911 9.17043 19.6992C9.22415 19.6074 9.29809 19.529 9.38664 19.47C9.77061 19.1849 10.2048 18.9745 10.6666 18.85C11.1279 18.7186 11.6115 18.6846 12.0866 18.75C12.1188 18.7574 12.1521 18.7583 12.1847 18.7528C12.2172 18.7472 12.2483 18.7352 12.2762 18.7176C12.3041 18.6999 12.3282 18.6769 12.3472 18.6498C12.3661 18.6228 12.3796 18.5923 12.3866 18.56C12.4018 18.4938 12.3904 18.4242 12.3548 18.3663C12.3193 18.3084 12.2625 18.2666 12.1966 18.25C11.6426 18.1347 11.0707 18.1347 10.5166 18.25C9.95701 18.3547 9.42143 18.5615 8.93664 18.86C8.73514 18.9772 8.56462 19.141 8.43936 19.3376C8.3141 19.5342 8.23773 19.7579 8.21664 19.99C8.20982 20.1817 8.24391 20.3726 8.31664 20.55C8.31664 20.71 8.25664 20.86 8.23664 21.02C8.22677 21.1665 8.22677 21.3135 8.23664 21.46C8.22574 21.6098 8.22574 21.7602 8.23664 21.91C8.27204 22.1742 8.3289 22.4351 8.40664 22.69C8.36084 22.7368 8.33518 22.7996 8.33518 22.865C8.33518 22.9305 8.36084 22.9933 8.40664 23.04C8.64478 23.2516 8.91054 23.4299 9.19664 23.57C9.47208 23.7022 9.75605 23.8158 10.0466 23.91C10.3737 24.005 10.7082 24.0719 11.0466 24.11C11.3792 24.1424 11.7141 24.1424 12.0466 24.11C12.7481 24.0264 13.427 23.8092 14.0466 23.47C14.0822 23.4559 14.1146 23.4347 14.1416 23.4076C14.1687 23.3805 14.1899 23.3482 14.204 23.3125C14.218 23.2769 14.2246 23.2388 14.2234 23.2005C14.2221 23.1623 14.213 23.1247 14.1966 23.09C14.1825 23.0544 14.1613 23.0221 14.1342 22.9951C14.1071 22.968 14.0748 22.9468 14.0391 22.9327C14.0035 22.9187 13.9654 22.9121 13.9271 22.9133C13.8889 22.9146 13.8513 22.9237 13.8166 22.94C13.3571 23.0901 12.8795 23.1776 12.3966 23.2C12.0371 23.225 11.6762 23.225 11.3166 23.2C10.9551 23.1861 10.5946 23.1527 10.2366 23.1C9.91533 23.0734 9.59725 23.0165 9.28664 22.93L9.02664 22.82C9.02664 22.51 9.08664 22.21 9.10664 21.9V21.5L9.48664 21.67C9.65424 21.7481 9.82821 21.8117 10.0066 21.86L10.5566 21.98C11.4081 22.1143 12.2752 22.1143 13.1266 21.98C13.5552 21.9072 13.9701 21.769 14.3566 21.57C14.3517 21.6199 14.3517 21.6702 14.3566 21.72C14.4166 22.05 14.4966 22.37 14.5666 22.72C14.5692 22.7582 14.5792 22.7954 14.5962 22.8296C14.6132 22.8638 14.6367 22.8944 14.6655 22.9195C14.6943 22.9445 14.7278 22.9637 14.764 22.9758C14.8003 22.9879 14.8385 22.9928 14.8766 22.99C14.9143 22.9888 14.9513 22.98 14.9855 22.9641C15.0197 22.9482 15.0503 22.9255 15.0755 22.8975C15.1007 22.8695 15.12 22.8367 15.1322 22.801C15.1445 22.7654 15.1494 22.7276 15.1466 22.69C15.1466 22.43 15.2066 22.19 15.2466 21.94C15.7507 22.235 16.2971 22.4508 16.8666 22.58C17.1945 22.6569 17.5299 22.6972 17.8666 22.7C18.2018 22.706 18.5367 22.6792 18.8666 22.62C19.6688 22.4887 20.4389 22.2071 21.1366 21.79C21.1705 21.774 21.2008 21.7514 21.2258 21.7235C21.2507 21.6956 21.2698 21.6629 21.2819 21.6275C21.2941 21.5921 21.299 21.5546 21.2963 21.5172C21.2937 21.4799 21.2836 21.4434 21.2666 21.41C21.2507 21.3749 21.2277 21.3434 21.1991 21.3175C21.1704 21.2916 21.1367 21.272 21.1001 21.2598C21.0634 21.2476 21.0247 21.2431 20.9862 21.2466C20.9478 21.25 20.9105 21.2614 20.8766 21.28C20.1999 21.5335 19.4883 21.6819 18.7666 21.72H17.8466C17.5466 21.72 17.2366 21.72 16.9366 21.65C16.3491 21.5996 15.7708 21.4719 15.2166 21.27V20.87C15.1474 20.3758 15.1474 19.8743 15.2166 19.38C15.7259 19.674 16.2749 19.8929 16.8466 20.03C17.5336 20.1633 18.2397 20.1633 18.9266 20.03C19.6243 19.9075 20.2989 19.6782 20.9266 19.35C20.9266 19.98 20.9266 20.5 20.9766 20.84C20.9688 20.8819 20.9702 20.925 20.9809 20.9663C20.9916 21.0076 21.0112 21.046 21.0384 21.0788C21.0656 21.1116 21.0998 21.138 21.1383 21.1561C21.1769 21.1743 21.219 21.1837 21.2616 21.1837C21.3043 21.1837 21.3464 21.1743 21.385 21.1561C21.4235 21.138 21.4576 21.1116 21.4849 21.0788C21.5121 21.046 21.5317 21.0076 21.5424 20.9663C21.5531 20.925 21.5545 20.8819 21.5466 20.84C21.5966 20.14 21.6966 18.69 21.7666 17.05V15.42C21.7666 14.87 21.8366 14.15 21.8166 13.62ZM15.3466 15.62V13.95C15.3417 13.8634 15.3417 13.7766 15.3466 13.69C15.8268 13.9567 16.3417 14.1553 16.8766 14.28C17.2045 14.3569 17.5399 14.3972 17.8766 14.4C18.2118 14.406 18.5467 14.3792 18.8766 14.32C19.5454 14.2055 20.1929 13.9897 20.7966 13.68V15.25V15.71C20.1531 15.9403 19.4793 16.0751 18.7966 16.11H17.8766C17.5766 16.11 17.2666 16.11 16.9666 16.05C16.39 15.9982 15.8222 15.8739 15.2766 15.68L15.3466 15.62ZM15.7866 11.45C15.9562 11.5205 16.1298 11.5806 16.3066 11.63C16.4878 11.6796 16.6714 11.7196 16.8566 11.75C17.705 11.8797 18.5682 11.8797 19.4166 11.75C19.9984 11.6619 20.5505 11.4356 21.0266 11.09C21.0266 11.65 20.9466 12.3 20.9166 13.02C20.2582 13.262 19.5672 13.4035 18.8666 13.44H17.9466C17.6466 13.44 17.3366 13.44 17.0366 13.38C16.4604 13.32 15.8932 13.1924 15.3466 13V11.24L15.7866 11.45ZM18.8666 18.95H17.9466C17.6466 18.95 17.3366 18.95 17.0366 18.89C16.435 18.834 15.8434 18.6995 15.2766 18.49V17.28V16.36C15.7624 16.6345 16.2841 16.8398 16.8266 16.97C17.156 17.038 17.4905 17.0781 17.8266 17.09C18.1618 17.096 18.4967 17.0692 18.8266 17.01C19.4918 16.8939 20.1357 16.6781 20.7366 16.37V16.87C20.7366 17.45 20.7366 18.01 20.7866 18.51C20.1711 18.7464 19.5242 18.8913 18.8666 18.94V18.95Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4866 17.3201C10.5242 17.3242 10.5623 17.3207 10.5984 17.3097C10.6346 17.2987 10.6682 17.2806 10.6972 17.2563C10.7261 17.232 10.7499 17.2021 10.767 17.1683C10.7841 17.1346 10.7942 17.0978 10.7966 17.0601C10.8853 16.588 10.9388 16.11 10.9566 15.6301V15.0301C10.9471 14.8325 10.927 14.6355 10.8966 14.4401C10.8366 14.0101 10.7566 13.6501 10.6966 13.4401C10.7165 13.261 10.6992 13.0798 10.6459 12.9077C10.5925 12.7357 10.5043 12.5765 10.3866 12.4401C10.2021 12.2483 9.9811 12.0953 9.73665 11.9901C9.42232 11.8332 9.08458 11.7285 8.73665 11.6801C8.69982 11.6729 8.66192 11.6732 8.62521 11.6809C8.5885 11.6887 8.55372 11.7037 8.52293 11.7252C8.49215 11.7466 8.466 11.774 8.44602 11.8058C8.42604 11.8376 8.41265 11.873 8.40665 11.9101C8.39939 11.9475 8.39958 11.986 8.40722 12.0233C8.41485 12.0607 8.42978 12.0962 8.45114 12.1277C8.47251 12.1593 8.49989 12.1864 8.53172 12.2074C8.56355 12.2284 8.5992 12.2429 8.63665 12.2501C8.88411 12.2936 9.12351 12.3745 9.34665 12.4901C9.56197 12.5779 9.75375 12.7148 9.90665 12.8901C9.95266 12.9545 9.98523 13.0276 10.0024 13.1049C10.0196 13.1822 10.021 13.2622 10.0066 13.3401C9.99878 13.4167 9.97518 13.4909 9.93732 13.558C9.89947 13.6251 9.84817 13.6837 9.78665 13.7301C9.38525 13.9723 8.93371 14.1194 8.46665 14.1601C7.71044 14.2674 6.94286 14.2674 6.18665 14.1601C6.02923 14.1193 5.87539 14.0658 5.72665 14.0001C5.5866 13.9639 5.44954 13.9171 5.31665 13.8601L4.77665 13.6101C4.6886 13.5643 4.61328 13.4974 4.55744 13.4154C4.50159 13.3333 4.46696 13.2387 4.45665 13.1401C4.4635 13.0348 4.49404 12.9325 4.54599 12.8407C4.59794 12.7489 4.66995 12.6701 4.75665 12.6101C5.14257 12.3304 5.57637 12.1237 6.03665 12.0001C6.49707 11.8638 6.98168 11.8297 7.45665 11.9001C7.49014 11.9074 7.52476 11.908 7.5585 11.9019C7.59225 11.8959 7.62445 11.8831 7.65326 11.8646C7.68208 11.846 7.70693 11.8219 7.72639 11.7936C7.74585 11.7654 7.75953 11.7336 7.76665 11.7001C7.77614 11.6342 7.76097 11.5671 7.72406 11.5118C7.68715 11.4564 7.63109 11.4166 7.56665 11.4001C7.01596 11.2846 6.44733 11.2846 5.89665 11.4001C5.33726 11.5001 4.80143 11.7036 4.31665 12.0001C4.11233 12.1139 3.93954 12.2768 3.81385 12.4741C3.68816 12.6713 3.61352 12.8968 3.59665 13.1301C3.58301 13.3105 3.61036 13.4917 3.67665 13.6601C3.59818 14.1503 3.54478 14.6443 3.51665 15.1401V16.1401C3.51665 16.5001 3.51665 16.7901 3.57665 17.1401C3.63665 17.8801 3.73665 18.5501 3.81665 19.0701C3.78476 19.1281 3.7753 19.1958 3.79005 19.2603C3.80479 19.3248 3.84273 19.3817 3.89665 19.4201L3.97665 19.4801C3.998 19.5115 4.02515 19.5387 4.05665 19.5601C4.27711 19.7618 4.51847 19.9395 4.77665 20.0901C4.91598 20.1739 5.06793 20.2347 5.22665 20.2701C5.37855 20.3211 5.53664 20.3513 5.69665 20.3601C6.05893 20.3991 6.42437 20.3991 6.78665 20.3601C6.82854 20.3679 6.87165 20.3665 6.91292 20.3558C6.95419 20.3451 6.99259 20.3255 7.0254 20.2983C7.05821 20.2711 7.08462 20.2369 7.10274 20.1984C7.12087 20.1598 7.13027 20.1177 7.13027 20.0751C7.13027 20.0324 7.12087 19.9903 7.10274 19.9517C7.08462 19.9132 7.05821 19.8791 7.0254 19.8518C6.99259 19.8246 6.95419 19.805 6.91292 19.7943C6.87165 19.7836 6.82854 19.7822 6.78665 19.7901C6.41665 19.7001 6.11665 19.5801 5.78665 19.4901L5.17665 19.2901L4.41665 19.0001V17.2001C4.91127 17.4805 5.44326 17.6893 5.99665 17.8201C6.32531 17.8923 6.66022 17.9325 6.99665 17.9401C7.33177 17.9452 7.66662 17.9185 7.99665 17.8601C8.73971 17.7282 9.45597 17.4748 10.1166 17.1101C10.1243 17.1497 10.1406 17.1873 10.1641 17.2201C10.1877 17.2529 10.2182 17.2803 10.2533 17.3002C10.2885 17.3202 10.3275 17.3323 10.3678 17.3357C10.4081 17.3391 10.4486 17.3338 10.4866 17.3201ZM8.01665 16.9201H7.09665C6.78665 16.9201 6.49665 16.9201 6.18665 16.8501C5.59983 16.7949 5.0221 16.6672 4.46665 16.4701V16.0201V15.0701V14.4301L4.58665 14.5001C4.72604 14.5749 4.86961 14.6417 5.01665 14.7001C5.18538 14.7753 5.35913 14.8388 5.53665 14.8901C5.7144 14.9396 5.89466 14.9796 6.07665 15.0101C6.92843 15.1394 7.79486 15.1394 8.64665 15.0101C9.14307 14.9367 9.61939 14.7632 10.0466 14.5001V15.0901V15.6801C10.0466 15.8701 10.1366 16.2601 10.1666 16.4901C9.47939 16.7537 8.75245 16.8991 8.01665 16.9201Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1566 2.31001C13.5666 2.31001 13.9466 2.47001 14.3566 2.54001H14.4466V2.60001C14.4902 3.03786 14.5637 3.47221 14.6666 3.90001C14.6717 3.97606 14.7056 4.04732 14.7613 4.09933C14.817 4.15134 14.8904 4.18018 14.9666 4.18001C15.0436 4.17253 15.1149 4.1366 15.1667 4.07926C15.2185 4.02191 15.247 3.94729 15.2466 3.87001C15.2466 3.44001 15.3666 3.03001 15.4066 2.59001H15.4666C15.9041 2.55123 16.3364 2.46745 16.7566 2.34001C16.8267 2.31901 16.8863 2.27231 16.9234 2.20925C16.9604 2.1462 16.9723 2.07146 16.9566 2.00001C16.945 1.93108 16.9097 1.86838 16.8567 1.82273C16.8038 1.77709 16.7365 1.75137 16.6666 1.75001C16.272 1.7403 15.8782 1.71026 15.4866 1.66001C15.4866 1.20001 15.4266 0.750012 15.4266 0.290012C15.431 0.252578 15.4272 0.214638 15.4155 0.17882C15.4038 0.143002 15.3844 0.110162 15.3587 0.0825772C15.333 0.0549919 15.3016 0.0333202 15.2668 0.0190637C15.2319 0.00480711 15.1943 -0.00169342 15.1566 1.24493e-05C15.0896 -0.00608926 15.0227 0.0130931 14.969 0.0537953C14.9153 0.0944975 14.8788 0.153781 14.8666 0.220012C14.7243 0.632454 14.6074 1.05325 14.5166 1.48001C14.5166 1.48001 14.5166 1.57001 14.5166 1.61001C14.0591 1.63823 13.6044 1.70175 13.1566 1.80001C13.1234 1.7999 13.0904 1.8067 13.0599 1.81999C13.0294 1.83328 13.002 1.85277 12.9795 1.87722C12.9569 1.90167 12.9396 1.93055 12.9288 1.96202C12.918 1.99348 12.9139 2.02685 12.9166 2.06001C12.9189 2.1239 12.9446 2.18471 12.9889 2.23083C13.0332 2.27695 13.0929 2.30514 13.1566 2.31001Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_24_4484">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.666672)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
