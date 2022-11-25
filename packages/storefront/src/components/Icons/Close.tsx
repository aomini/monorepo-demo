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
  viewBox = '0 0 45.823 45.823',
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
          d='M45.09,45.09a2.52,2.52,0,0,1-3.54,0L28.91,32.45l-1.77-1.77a2.5,2.5,0,1,1,3.54-3.54l1.77,1.77L45.09,41.55a2.52,2.52,0,0,1,0,3.54Z'
          fill='#00c569'
        />
        <path
          d='M45.09.73a2.52,2.52,0,0,0-3.54,0L22.91,19.37,4.27.73A2.5,2.5,0,0,0,.73,4.27L19.37,22.91.73,41.55a2.5,2.5,0,1,0,3.54,3.54L45.09,4.27a2.51,2.51,0,0,0,0-3.54Z'
          fill='#111'
        />
      </g>
    </svg>
  );
};
export default SVG;
