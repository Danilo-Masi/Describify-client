//Components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col">
            <Navbar />
            <div className="w-full h-full flex items-center justify-center">
                <h1>Home page</h1>
            </div>
        </Layout>
    )
}
