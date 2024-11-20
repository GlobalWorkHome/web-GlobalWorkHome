'use client'
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";


const isDescendant = (element, parent) => {
    if (!element) return false;

    if (element === parent) return true;

    return isDescendant(element.parentNode, parent);
}

const languages = {
    'es': [
        {
            code: 'es',
            label: 'Español',
        },
        {
            code: 'en',
            label: 'Ingles',
        },
    ],
    'en': [
        {
            code: 'es',
            label: 'Spanish',
        },
        {
            code: 'en',
            label: 'English',
        },
    ],
}

export const LanguageSwitcher = () => {

    const router = useRouter();
    const currentLang = useLocale()
    const [currentLanguaje, setCurrentLanguaje] = useState(currentLang || 'en')
    const [isOpen, setIsOpen] = useState(false)


    const btnRef = useRef(null)


    const handleOutsideClick = (ev) => {
        if (
            ev.target !== btnRef.current &&
            !isDescendant(ev.target, btnRef.current)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body?.addEventListener('click', handleOutsideClick)

        return () => {
            body?.removeEventListener('click', handleOutsideClick)
        }
    }, [])



    const handleSelectLanguege = (languegeSelected) => {

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${currentLang}`, `/${languegeSelected}`);
        setCurrentLanguaje(languegeSelected)

        router.push(newPath);
    }

    return (
        <div>
            <div className="relative">
                <button
                    className="bg-white rounded px-0"
                    onClick={() => setIsOpen(!isOpen)}
                    ref={btnRef}
                >
                    <Image
                        src={`/images/icons/${currentLanguaje}.svg`}
                        alt={currentLanguaje}
                        width={24}
                        height={24}
                        className="w-6 rounded"
                    />
                </button>
                <ul className={`bg-white absolute top-[100%] right-0 rounded px-1 overflow-hidden ${isOpen ? 'h-auto py-1' : 'h-0'}`}>
                    {
                        languages[currentLang].map(({ code, label }) => (
                            <li
                                key={code}
                                value={code}
                                onClick={() => handleSelectLanguege(code)}
                                className="flex items-center gap-2 text-sm px-2 py-1 first-of-type:border-b pr-5 cursor-pointer hover:bg-gray-200 hover:text-black rounded font-semibold text-gray-700"
                            >
                                <Image
                                    src={`/images/icons/${code}.svg`}
                                    alt={code}
                                    width={50}
                                    height={30}
                                    className="w-4 rounded"
                                />
                                <span>{label}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
