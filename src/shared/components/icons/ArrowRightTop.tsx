import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ArrowRightTopSvg = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 0.25C3.08579 0.25 2.75 0.58579 2.75 1C2.75 1.41421 3.08579 1.75 3.5 1.75H11.1893L0.469668 12.4697C0.176777 12.7626 0.176777 13.2374 0.469668 13.5303C0.762558 13.8232 1.23744 13.8232 1.53033 13.5303L12.25 2.81066V10.5C12.25 10.9142 12.5858 11.25 13 11.25C13.4142 11.25 13.75 10.9142 13.75 10.5V2.5C13.75 1.25736 12.7426 0.25 11.5 0.25H3.5Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowRightTop = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={ArrowRightTopSvg} {...props} />;
};

export default ArrowRightTop;
