//Components
import { Layout } from "../components/Layout";
import SideBar from "../components/SideBar";
import Product from "../components/Product";


export default function ProductPage() {
    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-[90%] md:w-full flex flex-col md:flex-row items-center justify-between gap-5">
                <SideBar />
                <Product />
            </div>
        </div>

    );
}
