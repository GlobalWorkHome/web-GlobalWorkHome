import { useTranslations } from "next-intl";
import { FaRegCheckCircle } from "react-icons/fa";


export const ModalSuccessMessage = ({ title, description, onClick }) => {

    const t = useTranslations('ModalSuccessMessage')

    return (
        <div className="max-w-[30rem] px-5 py-6">
            <div className="flex justify-center items-center">
                <FaRegCheckCircle className="text-green-500 text-6xl animate-jump" />
            </div>
            <h2 className="text-center text-3xl font-bold mt-4 text-gray-900">{ title }</h2>
            <p className="text-center mt-2 text-gray-500 mb-3 text-lg">{ description }</p>
            <div>
                <button
                    onClick={ onClick }
                    className="uppercase bg-yellow-600 hover:bg-yellow-500 transition disabled:hover:bg-yellow-600 disabled:opacity-50 text-white font-bold w-full text-lg rounded-md py-3 mt-4 sm:mt-2"
                >
                    { t('button') }
                </button>
            </div>
        </div>
    )
}
