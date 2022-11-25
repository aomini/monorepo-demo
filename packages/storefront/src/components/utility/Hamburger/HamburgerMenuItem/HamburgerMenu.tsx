import { border, themeColor, transitions } from '@/theme/theme';
import type { MenuClickProps, MenuItem } from '@/types/menus.types';
import { rem, transparentize } from 'polished';
import styled, { css } from 'styled-components';

type Props = {
  data: Array<MenuItem>;
  onHandleMenuClick?: ({ slug, children }: MenuClickProps) => void;
};

export type HamburgerMenuProps = Props;

export const HamburgerMenuItem = ({
  data,
  onHandleMenuClick,
}: HamburgerMenuProps) => {
  return (
    <HamburgerMenuItemUl className='menu-item'>
      {data &&
        data.map((item, i) => {
          return (
            <li
              key={item.slug}
              onClick={() =>
                onHandleMenuClick && item?.children?.length
                  ? onHandleMenuClick({
                      slug: item.slug,
                      children: item.children || [],
                    })
                  : null
              }
            >
              {item.title}
            </li>
          );
        })}
    </HamburgerMenuItemUl>
  );
};

const HamburgerMenuItemUl = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding-left: ${rem(35)};
      padding-top: ${rem(9)};
      padding-bottom: ${rem(9)};
      font-size: 16px;
      line-height: 20px;
      font-family: ${theme.fonts.family.circularStd.medium};
      background-color: transparent;
      color: ${theme.color.blackDark};
      border-radius: ${rem(border.radius)};
      transition: ${transitions.transition_1};

      + li {
        margin-top: ${rem(10)};
      }

      &.active,
      &:hover {
        background-color: ${themeColor.green['200']};
        color: ${themeColor.black['900']};
      }
    }

    + ul {
      margin-top: ${rem(10)};
      padding-top: ${rem(10)};
      border-top: 1px solid ${transparentize('0.9', `${theme.color.text}`)};
    }
  `}
`;
