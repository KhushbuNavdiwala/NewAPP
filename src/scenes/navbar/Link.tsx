
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;

}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    // bcz page is string and if you dont write like this then you have error in lowerCasePAge
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
            transition duration-500 hover:text-primary-300 `}
            href={`#${lowerCasePage} 
            `}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>

    )
}

export default Link