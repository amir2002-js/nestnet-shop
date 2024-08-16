import Logo from "../Logo/Logo.jsx";

function Header() {
    return (
        <nav>
            <div className={`flex justify-between items-center`}>
                <div>
                    <Logo width={`w-44`} />
                </div>

                <div></div>
            </div>
        </nav>
    );
}

export default Header;