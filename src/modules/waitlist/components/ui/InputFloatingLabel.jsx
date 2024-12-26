import { useEffect, useState } from 'react'

export const InputFloatingLabel = ({ label, value, onChange, ...props }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)

    const handleFocus = () => setIsFocused(true)
    
    const handleBlur = (e ) => {
        setIsFocused(false)
        setHasValue(e.target.value !== '')
    }

    useEffect(()=>{
        setHasValue(value.trim() !== '')
    },[value])

    return (
        <div className="relative">
            <input
                className="peer w-full rounded-md border border-gray-300 px-3 py-3 md:py-4 placeholder-transparent focus:border-yellow-500 focus:outline-none font-semibold"
                placeholder={label}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={({ target })=> onChange( target.value )}
                value={ value }
                {...props}
            />
            <label
                className={`absolute left-3 bg-white font-semibold rounded px-2 text-sm transition-all
                    ${(isFocused || hasValue)
                        ? 'text-yellow-600 -top-2.5'
                        : 'text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base'
                    }
                `}
            >
                {label}
            </label>
        </div>
    )
}
