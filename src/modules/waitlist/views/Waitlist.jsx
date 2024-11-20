"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import PreSubscriptionBenefits from "../components/PreSubscriptionBenefits"
import { WaitListForm } from "../components/WaitListForm"
import { LanguageSwitcher } from "@/modules/core/components/LanguageSwitcher"
import { PiMouseSimple } from "react-icons/pi"

export const Waitlist = () => {

    const t = useTranslations('WaitlistPage')

    const scrollToNextSection = () => {
        const nextSection = document.querySelector("section")
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className="absolute top-5 right-5">
                <LanguageSwitcher />
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
                            <h1 className="text-white text-4xl font-bold md:text-6xl lg:text-8xl mb-3 animate-fade-right">{t('title')}</h1>
                            <p className="text-white text-xl md:text-2xl font-semibold animate-fade-right">{t('subtitle')}</p>
                            <WaitListForm />
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                    <button
                        className="animate-bounce animate-duration-[2000ms] animate-infinite animate-ease-in-out sm:bottom-20 md:bottom-10"
                        onClick={scrollToNextSection}
                        aria-label="Scroll down"
                    >
                        <PiMouseSimple className="text-white text-5xl transition duration-1000" />
                    </button>
                </div>

            </header>
            <section>
                <PreSubscriptionBenefits />
            </section>
        </>
    )
}
