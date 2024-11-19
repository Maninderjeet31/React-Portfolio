import React from "react";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as TiIcons from "react-icons/ti";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <TiIcons.TiInfo />,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <IoIcons.IoIosBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <GiIcons.GiBookshelf />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdContact />,
        cName: 'nav-text'
    }
]