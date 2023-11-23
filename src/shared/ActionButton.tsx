import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}
//this children declare what is inside ACtionbutton
const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            //we can nevigate to page when we click Actionbutton
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`${SelectedPage.ContactUs}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton