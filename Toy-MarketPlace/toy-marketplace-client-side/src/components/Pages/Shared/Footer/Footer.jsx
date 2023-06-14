import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-purple-500 text-neutral-content">
            <div>
                <img src="./202d014e90df4a03bd2df065a30c6b52.png" alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                <p>Contact Us!!</p>
                <p>herotoyz@gmail.com</p>
                <p>Gulshan.Dhaka-1219</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebook className="h-8 w-8"></FaFacebook>
                    <FaTwitter className="h-8 w-8"></FaTwitter>
                    <FaYoutube className="h-8 w-8"></FaYoutube>

                </div>
            </div>
        </footer>
    );
};

export default Footer;