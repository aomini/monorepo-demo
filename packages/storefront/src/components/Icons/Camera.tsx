import clsx from 'clsx';
type Props = {
  color?: string;
  size?: number;
  className?: string;
  viewBox?: string;
};

export type IconProps = Props;
const SVG = ({
  color,
  size = 20,
  className = '',
  viewBox = '0 0 50 50',
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns='http://www.w3.org/2000/svg'
      className={clsx('svg-icon', className)}
      xmlnsXlink='http://www.w3.org/1999/xlink'
      fill={color} // added color here
    >
      <g>
        <path
          d='M41.92,9H38.25l-1-4a6.63,6.63,0,0,0-6.43-5H19.17a6.63,6.63,0,0,0-6.43,5l-1,4H8.08A8.08,8.08,0,0,0,0,17.08V41.92A8.08,8.08,0,0,0,8.08,50H41.92A8.08,8.08,0,0,0,50,41.92V17.08A8.08,8.08,0,0,0,41.92,9ZM45,41.92A3.08,3.08,0,0,1,41.92,45H8.08A3.08,3.08,0,0,1,5,41.92V17.08A3.08,3.08,0,0,1,8.08,14h5.16a3.07,3.07,0,0,0,3-2.34l1.29-5.15A2,2,0,0,1,19.46,5H30.54a2,2,0,0,1,1.94,1.51l1.29,5.15a3.07,3.07,0,0,0,3,2.34h5.16A3.08,3.08,0,0,1,45,17.08Z'
          fill='#111'
        />
        <circle
          cx='2.5'
          cy='2.5'
          r='2.5'
          transform='translate(37 17)'
          fill='#111'
        />
        <path
          d='M25,22a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-5A12,12,0,1,0,37,29,12,12,0,0,0,25,17Z'
          fill='#00c569'
        />
      </g>
    </svg>
  );
};
export default SVG;
