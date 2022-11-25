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
  viewBox = '0 0 50.249 38.985',
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
        <g>
          <path
            d='M34.71,39H12.34A12.34,12.34,0,0,1,6.27,15.92v-.45A15.47,15.47,0,0,1,35.78,9a15.01,15.01,0,0,1-1.07,30Zm-13-34A10.49,10.49,0,0,0,11.26,15.47a10.82,10.82,0,0,0,.14,1.59l.31,2-1.91.71A7.34,7.34,0,0,0,12.34,34H34.71a10,10,0,0,0,0-20h-.25l-2.17.11-.59-1.82A10.44,10.44,0,0,0,21.74,5Z'
            fill='#111'
          />
          <path d='M37.87,41.49Z' fill='#00c569' />
          <rect
            width='24'
            height='5'
            rx='2.5'
            transform='translate(12.87 43.5)'
            fill='#00c569'
          />
        </g>
      </g>
    </svg>
  );
};
export default SVG;
