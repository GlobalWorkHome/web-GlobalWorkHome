import Image from "next/image"
import {useTranslations} from 'next-intl';
import PreSubscriptionBenefits from "../components/PreSubscriptionBenefits"
import { WaitListForm } from "../components/WaitListForm"
import { LanguageSwitcher } from "@/modules/core/components/LanguageSwitcher";



export const Waitlist = () => {

    const t = useTranslations('WaitlistPage')

    return (
        <>
            <div className="absolute top-5 right-5">
                <LanguageSwitcher/>
            </div>
            <header className="bg-[url(/images/pexels-edmond-dantes-4340037.jpg)] bg-no-repeat bg-cover bg-center h-screen">
                <div className="bg-black/80 w-full h-full">
                    <div className="container h-full flex items-center justify-center md:justify-start">
                        <div>
                            <figure className="w-36 sm:w-48 mb-6">
                                <Image
                                    src="/images/logo-white.svg"
                                    alt="Gobal Work Home"
                                    width={200}
                                    height={70}
                                    className="w-full h-full"
                                />
                            </figure>
                            <h1 className="text-white text-4xl font-bold md:text-6xl lg:text-8xl mb-3 animate-fade-right">{ t('title') }</h1>
                            <p className="text-white text-xl md:text-2xl font-semibold animate-fade-right">{ t('subtitle') }</p>
                            <WaitListForm />
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <PreSubscriptionBenefits />
            </section>
        </>
    )
}
