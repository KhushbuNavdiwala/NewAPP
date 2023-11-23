import { useState } from 'react'
//import { Bars3Icon, XMarkICon } from "@heroicons/react";
import { CgMenu } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import Logo from "@/assets/Logo.png";
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

    const flexBetween = "flex items-center justify_between";
    //this isAboveMediumScreens is for different screen resolution so menu symbol is depend on that 
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? " " : "bg-primary-300  drop-shadow";
    //this is come from Hooks floder
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    return (
        <nav>
            <div className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*Left side*/}
                        <img alt="logo" src={Logo} />

                        {/*Right side*/}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>

                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Contant Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In"</p>
                                    {/*when you click on actionbutton it will go to contactus page   */}
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>

                        ) : (
                            <button
                                className="rounded-full bg-secondary-500  p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <CgMenu className="h-6 w-6 text-white" />

                            </button>
                        )}

                    </div>

                </div>
            </div>
            {/*when you click menu MObilemenu modal is coming */}
            {!isAboveMediumScreens && isMenuToggled && (

                <div
                    className="fixed right-0 bottom-0 z-40 h-full w-[300px]
                bg-primary-100 drop-shadow-xl">
                    {/*Close icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)} >
                            <MdClose className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>
                    {/*Menu items ex:Home,Conatctus */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contant Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav >
    )
}

export default Navbar