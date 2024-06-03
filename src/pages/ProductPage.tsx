//Components
import Footer from "../components/Footer"
import GridBackground from "../components/GridBackground"
import { Layout } from "../components/Layout"
import Navbar from "../components/Navbar"
import Product from "../components/Product"

export default function ProductPage() {
    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar />
            <GridBackground>
                <Product />
            </GridBackground>
            <Footer />
        </Layout>
    )
}
