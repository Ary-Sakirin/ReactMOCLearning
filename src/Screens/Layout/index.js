import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Layout(props) {
    const list = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ]
    return (
        <>
            < Navbar logo="KIRIN" menu={list} bgColor="bg-secondary" />
            {props.children}
            < Footer />
        </>
    );
}