// this page is for HOME and Benefits and other navbar links
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;

}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    // bcz page is string and if you dont write like this then you have error in lowerCasePAge
    //this code convert any page name in lowercase and then remove all white space and store in selectedpage 
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <AnchorLink
        //here is condition if pagename found lowecase thenset color pink otherwise black 
            className={`${selectedPage === lowerCasePage ? 
                "text-primary-500" : ""} 
            transition duration-500 hover:text-primary-300 `}

            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>

    )
}

export default Link