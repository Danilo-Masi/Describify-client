//React-router
import { Link } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";

export default function ErrorPage() {
  return (
    <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-svh" justifyPosition="justify-center">
      <div className="w-[90%] h-svh flex flex-col justify-center items-center text-center gap-5">
        <h1 className='text-5xl bg-gradient-to-r from-dark-textPrimaryGray via-dark-border to-dark-background bg-clip-text text-transparent font-bold text-balance'>QUESTA PAGINA NON ESISTE</h1>
        <p className="text-md text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Prova a ricaricare la pagina, oppure torna alla home :(</p>
        <Link to="/">
          <button
            type="button"
            className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-hoverGray dark:hover:text-dark-hoverGray border border-custom-borderGray dark:border-dark-borderGray font-medium rounded-lg text-sm px-5 py-2.5">
            Vai alla Home
          </button>
        </Link>
      </div>
    </Layout>
  );
}
