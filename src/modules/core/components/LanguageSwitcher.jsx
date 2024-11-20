'use client'
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";


const languages = [
    {
        code :'es',
        label: 'Spanish',
    },
    {
        code :'en',
        label: 'English',
    },
]

export const LanguageSwitcher = () => {

    const router = useRouter();
    const currentLang = useLocale()

    const handleSelectLanguege = (languegeSelected) => {

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${currentLang}`, `/${languegeSelected}`);
        router.push(newPath);
    }

    return (
        <select
            name="change-language"
            className="bg-white rounded py-1 px-1"
            defaultValue={ currentLang }
            onChange={({ target }) => handleSelectLanguege(target.value)}
        >
            {
                languages.map(({ code, label }) => (
                    <option key={ code } value={ code }>
                        { label }
                    </option>
                ))
            }
        </select>
    )
}
