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
      <path
        d='M26.82,27.62l9-4.89a2.5,2.5,0,0,0-2.65-4.24l-9,4.89a2.5,2.5,0,1,0,2.65,4.24Z'
        fill='#00c569'
      />
      <path
        d='M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0Zm0,45A20,20,0,1,1,45,25,20,20,0,0,1,25,45Z'
        fill='#111'
      />
      <path
        d='M16.82,13.7a2.5,2.5,0,0,0-3.38,3.68l10.37,10a2.5,2.5,0,1,0,3.38-3.68Z'
        fill='#111'
      />
    </svg>
  );
};
export default SVG;
