import Image, { ImageLoaderProps } from 'next/image';
import style from './header.module.css';

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://cdn.iconscout.com/icon${src}?w=${width}&q=${quality || 75}`
}

const Header = (): JSX.Element => {

    return (
        <header className={style.headerContainer} >
            <Image className={style.headerLogo} loader={myLoader}
                src={"/premium/png-512-thumb/directions-5765346-4822225.png"}
                alt="venue"
                height={40}
                width={40}
                priority />
            <button className={`${style.headerItemFirst} ${style.headerItem}`}> SHOWS </button>
            <button className={`${style.headerItem}`}> MY ACCOUNT </button>
            <button className={`${style.headerItem} ${style.headerItemLast}`}> SIGN IN </button>
        </header>
    )

}

export default Header;