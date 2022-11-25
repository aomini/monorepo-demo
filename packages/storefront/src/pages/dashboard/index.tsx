import clsx from 'clsx';
import type { NextPage } from 'next';
import React from 'react';
import { useTheme } from 'styled-components';

import { Header } from '@/components/Header';
import {
  IconBell,
  IconCamera,
  IconClock,
  IconClose,
  IconCloud,
  IconComment,
  IconTransfer,
} from '@/components/Icons';
import { Image } from '@/components/Image';
import { Table } from '@/components/Table';
import { Button } from '@/components/utility/Button/Button';
import Drawer from '@/components/utility/Drawer/Drawer';
import { Hamburger } from '@/components/utility/Hamburger/Hamburger';
import { HamburgerMenu } from '@/components/utility/Hamburger/HamburgerMenu/HamburgerMenu';
import { HamburgerMenuItem } from '@/components/utility/Hamburger/HamburgerMenuItem/HamburgerMenu';
import { HamburgerSubMenu } from '@/components/utility/Hamburger/HamburgerSubMenu';
import { useMountTransition } from '@/hooks/useMountTransition';
import type { MenuClickProps, MenuItem } from '@/types/menus.types';

const menu: Array<MenuItem> = [
  {
    title: 'Dashboard',
    slug: 'dashboard',
    url: '/dashboard',
    children: [
      {
        title: 'Dashboard',
        slug: 'dashboard1',
        url: '/dashboard',
        children: [],
      },
      {
        title: 'Dashboard',
        slug: 'dashboard2',
        url: '/dashboard',
        children: [],
      },
      {
        title: 'Dashboard',
        slug: 'dashboard3',
        url: '/dashboard',
        children: [],
      },
    ],
  },
  {
    title: 'Products',
    slug: 'products',
    url: '/products',
    children: [],
  },
  {
    title: 'Stock',
    slug: 'categories',
    url: '/categories',
    children: [
      {
        title: 'Stock',
        slug: 'categories1',
        url: '/categories',
        children: [],
      },
      {
        title: 'Stock',
        slug: 'categories2',
        url: '/categories',
        children: [],
      },
      {
        title: 'Stock',
        slug: 'categories3',
        url: '/categories',
        children: [],
      },
    ],
  },
];

const menu1: Array<MenuItem> = [
  {
    title: 'Orders',
    slug: 'orders',
    url: '/orders',
    children: [],
  },
  {
    title: 'Products',
    slug: 'products',
    url: '/products',
    children: [],
  },
  {
    title: 'Customers',
    slug: 'customers',
    url: '/customers',
    children: [],
  },
  {
    title: 'Discount',
    slug: 'discount',
    url: '/discount',
    children: [],
  },
];

const menu2: Array<MenuItem> = [
  {
    title: 'Help',
    slug: 'help',
    url: '/help',
  },
  {
    title: 'System',
    slug: 'system',
    url: '/system',
  },
  {
    title: 'Diagnostics',
    slug: 'diagnostics',
    url: '/diagnostics',
  },
];

const data = [
  {
    status: 'true',
    id: 1,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
  {
    status: 'true',
    id: 2,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
  {
    status: 'true',
    id: 3,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
  {
    status: 'true',
    id: 4,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
  {
    status: 'true',
    id: 5,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
  {
    status: 'true',
    id: 6,
    category: 'Men',
    dateAdded: 'Published / Sep 09, 2022',
  },
];

const columns = [
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    grow: 0,
    width: '60px',
  },
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
    grow: 0,
    width: '60px',
  },
  {
    name: 'Category',
    selector: 'category',
    sortable: true,
    grow: 1,
  },
  {
    name: 'Date Added',
    selector: 'dateAdded',
    sortable: true,
    grow: 0,
    width: '322px',
  },
];

const Dashboard: NextPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { toggle, smallLogo } = useTheme();
  const [childMenuOpen, setChildMenuOpen] = React.useState(false);
  const [childMenuData, setChildMenuData] = React.useState<Array<MenuItem>>([]);
  const isTransitioning = useMountTransition({
    isMounted: menuOpen,
    mountDelay: 350,
    unmountDelay: 10,
  });
  const [selection, setSelection] = React.useState<null | MenuItem['slug']>(
    null
  );

  const handleMenuClick = ({ slug, children }: MenuClickProps) => {
    setSelection(slug);
    if (children) setChildMenuData(children);

    const shouldClose = !(childMenuOpen && selection === slug);

    setChildMenuOpen(shouldClose);
  };

  const toggleMenu = () => {
    setChildMenuOpen(!childMenuOpen);
  };
  return (
    <div>
      <main className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Header>
          <div className='left-menu'>
            <Hamburger
              open={menuOpen}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setChildMenuOpen(false);
              }}
            />
            <div className='logo'>
              <Image
                className='brand-logo'
                src={smallLogo}
                width={148}
                layout='fill'
              />
              {menuOpen ? (
                <h5
                  className={clsx('logo-text', {
                    in: isTransitioning,
                  })}
                >
                  Commerce
                </h5>
              ) : null}
            </div>
            <div className='tittle'>
              <p>Page title here</p>
            </div>
          </div>

          <Button variant='contained' onClick={() => toggle()}>
            darkmode
          </Button>
        </Header>

        <IconBell />
        <IconCamera />
        <IconClock />
        <IconClose />
        <IconCloud />
        <IconComment />
        <IconTransfer />
        <Table data={data} columns={columns} />

        <Drawer
          wrapperId='hamburgerMenu'
          isOpen={menuOpen}
          handleClose={() => {
            setMenuOpen(false);
          }}
          position='left'
          hasOverlay={false}
          width={252}
        >
          <HamburgerMenu>
            <div className='menu-top'>
              <HamburgerMenuItem
                data={menu}
                // toggle={toggleMenu}
                // setData={setChildMenuData}
                onHandleMenuClick={handleMenuClick}
              />
              <HamburgerMenuItem data={menu1} />
            </div>

            <div className='menu-bottom'>
              <HamburgerMenuItem data={menu2} />
            </div>
          </HamburgerMenu>
        </Drawer>

        <Drawer
          wrapperId='hamburgerMenu-submenu'
          isOpen={childMenuOpen}
          handleClose={() => {
            setChildMenuOpen(false);
          }}
          position='left'
          hasOverlay={false}
          fullWidth={true}
          styles={{ maxWidth: 'calc(75% - 252px)', left: '252px', zIndex: 1 }}
        >
          <HamburgerSubMenu>
            <HamburgerMenuItem data={childMenuData} />
          </HamburgerSubMenu>
        </Drawer>
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Dashboard;
