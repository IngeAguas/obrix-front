import Footer from "../Footer";
import { MainMenu } from "../Navbar";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <MainMenu />
            <div className="flex-grow">
                {/* contenido futuro */}
            </div>
            <Footer />
        </div>
    )
}