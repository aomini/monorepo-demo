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
  viewBox = '0 0 50 49.66',
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
          d='M41.83,0H8.17A8.17,8.17,0,0,0,0,8.17V29.83A8.17,8.17,0,0,0,8.17,38h2.55L7.34,46A2.5,2.5,0,1,0,12,47.68l4.76-11.17a.64.64,0,0,1,0-.07v-.07l.05-.17a1.447,1.447,0,0,1,.07-.26,2.45,2.45,0,0,0,0-.27,1,1,0,0,0,0-.17,2.46,2.46,0,0,0,0-.28V35a2.089,2.089,0,0,0-.08-.23.9.9,0,0,0-.08-.23,1.28,1.28,0,0,0-.11-.2,1.55,1.55,0,0,0-.12-.22l-.16-.19a1.22,1.22,0,0,0-.15-.17,1.39,1.39,0,0,0-.19-.15.9.9,0,0,0-.19-.15l-.19-.11a2.059,2.059,0,0,0-.26-.12h-.17L14.94,33H8.17A3.17,3.17,0,0,1,5,29.83V8.17A3.17,3.17,0,0,1,8.17,5H41.83A3.17,3.17,0,0,1,45,8.17V29.83A3.17,3.17,0,0,1,41.83,33H24.5a2.5,2.5,0,0,0,0,5H41.83A8.17,8.17,0,0,0,50,29.83V8.17A8.17,8.17,0,0,0,41.83,0Z'
          fill='#111'
        />
        <path
          d='M33,14.5A2.5,2.5,0,0,0,30.5,12h-18a2.5,2.5,0,0,0,0,5h18A2.5,2.5,0,0,0,33,14.5Z'
          fill='#111'
        />
        <rect
          width='18'
          height='5'
          rx='2.5'
          transform='translate(10 21)'
          fill='#00c569'
        />
      </g>
    </svg>
  );
};
export default SVG;
