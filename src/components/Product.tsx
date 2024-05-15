//Components

import ProductForm from "./ProductForm";
import ProductCaption from "./ProductCaption";
import ProductTitle from "./ProductTitle";
import ProductDetails from "./ProductDetails";

export default function Product() {
    return (
        <div className="w-full md:w-3/4 h-auto flex flex-col md:flex-row gap-5 p-5 mb-10 rounded-xl z-10 bg-custom-elevation2 dark:bg-dark-elevation2">
            <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-6">
                <ProductDetails />
                <ProductForm />
            </div>
            <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-6">
                <ProductTitle />
                <ProductCaption />
            </div>
        </div>
    );
}
