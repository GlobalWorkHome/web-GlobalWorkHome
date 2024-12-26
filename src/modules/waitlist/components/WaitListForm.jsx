'use client'
import { Controller, useForm } from "react-hook-form"
import confetti from 'canvas-confetti'
import { InputFloatingLabel } from "./ui/InputFloatingLabel"
import { isValidEmail } from "@/modules/core/utils/validators"
import { subscribeToTheWaitinglist } from "@/modules/waitlist/actions/waitlist"
import { useState } from "react"
import { USER_ROLES_SELECT } from "@/modules/users/constants/roles"
import { useTranslations } from 'next-intl'
import { ModalContainer } from "@/modules/core/components/ModalContainer"
import { ModalSuccessMessage } from "@/modules/core/components/ModalSuccessMessage"

export const WaitListForm = () => {
    const t = useTranslations('WaitlistPage.WaitListForm')
    const s = useTranslations('ModalSuccessMessage')


    const [isLoading, setIsLoading] = useState(false)
    const [showModalSubscribeSuccessful, setShowModalSubscribeSuccessful] = useState(false)
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            role: ''
        }
    })

    const handleWaitListSubmit = async (formData) => {
        setIsLoading(true)
        const { error } = await subscribeToTheWaitinglist(formData)
        setIsLoading(false)

        if (error) {
            return console.log(error)
        }

        reset()
        setShowModalSubscribeSuccessful(true)
        confetti({
            zIndex: 999,
            spread: 120,
            angle: 77,
            particleCount: Math.floor(200 * 3),
            origin:{
                x: 0,
                y: 1
            },
            decay: 0.95,
            scalar: 1
        })
        confetti({
            zIndex: 999,
            spread: 120,
            angle: 105,
            particleCount: Math.floor(200 * 3),
            origin:{
                x: 1,
                y: 1
            },
            decay: 0.95,
            scalar: 1
        })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(handleWaitListSubmit)}
                className="max-w-[40rem] mt-5"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
                    <div>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field }) => (
                                <InputFloatingLabel
                                    label={t('name.label')}
                                    type="text"
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={t('name.placeholder')}
                                />
                            )}
                            rules={{
                                required: t('name.error'),
                                validate: value => value.trim() === '' ? t('name.error') : undefined
                            }}
                        />
                        {errors.name && (
                            <span className="text-sm text-red-500">{t('name.error')}</span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <InputFloatingLabel
                                    label={t('email.label')}
                                    type="text"
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={t('email.placeholder')}
                                />
                            )}
                            rules={{
                                required: t('email.error'),
                                validate: value => !isValidEmail(value) ? t('email.invalidError') : undefined
                            }}
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500">{t(errors.email.type === 'required' ? 'email.error' : 'email.invalidError')}</span>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <select
                            className="w-full py-3 md:py-4 text-gray-500 font-semibold rounded-md px-4"
                            {...register('role', {
                                validate: value => value.trim() === '' ? t('role.error') : undefined
                            })}
                        >
                            <option value="">{t('role.placeholder')}</option>
                            {
                                USER_ROLES_SELECT.map(role => (
                                    <option key={role.key} value={role.key}>
                                        {t(`userRolSelect.${role.key}`)}
                                    </option>
                                ))
                            }

                        </select>
                        {errors.role && (
                            <span className="text-sm text-red-500">{t('role.error')}</span>
                        )}
                    </div>
                </div>
                <button
                    disabled={isLoading}
                    className="uppercase bg-yellow-600 hover:bg-yellow-500 transition disabled:hover:bg-yellow-600 disabled:opacity-50 text-white font-bold w-full text-lg rounded-md py-3 mt-4 sm:mt-2"
                >
                <span className='inline-block animate-jump'>
                {isLoading ? t('submit.loading') : t('submit.label')}
                </span>
                </button>
                <p className="text-white text-sm mt-2">{t('termsAndConditions.text')}</p>
            </form>
            <ModalContainer
                show={showModalSubscribeSuccessful}
                onClose={ ()=> setShowModalSubscribeSuccessful(false) }
            >
                <ModalSuccessMessage
                    title={ s('title') }
                    description={ s('subtitle') }
                    onClick={ ()=> setShowModalSubscribeSuccessful(false) }
                />
            </ModalContainer>
        </>
    )
}