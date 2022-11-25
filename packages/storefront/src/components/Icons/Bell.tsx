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
  viewBox = '0 0 44.027 50.014',
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
          d='M25,41v1a3,3,0,1,1-6,0V41H14v1a8,8,0,0,0,16,0V41Z'
          fill='#00c569'
        />
        <path
          d='M41.36,36A2.36,2.36,0,0,1,39,33.64V22A17,17,0,0,0,24.5,5.2V2.64A2.6,2.6,0,0,0,22.26,0,2.5,2.5,0,0,0,19.5,2.5V5.2A17,17,0,0,0,5,22V33.64A2.36,2.36,0,0,1,2.64,36,2.6,2.6,0,0,0,0,38.24,2.5,2.5,0,0,0,2.5,41h39A2.5,2.5,0,0,0,44,38.24,2.6,2.6,0,0,0,41.36,36ZM10,36V22.35a12.25,12.25,0,0,1,10.84-12.3A12,12,0,0,1,34,22V36Z'
          fill='#111'
        />
      </g>
    </svg>
  );
};
export default SVG;
