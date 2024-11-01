'use client'
import { Controller, useForm } from "react-hook-form"
import { InputFloatingLabel } from "./ui/InputFloatingLabel"
import { isValidEmail } from "@/utils/validators"
import { subscribeToTheWaitinglist } from "@/actions/waitlist"
import { useState } from "react"


export const WaitListForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            role: ''
        }
    })


    const handleWaitListSubmit = async(formData) => {
        setIsLoading(true)
        try {
            await subscribeToTheWaitinglist( formData )
        } catch (error) {
            console.log(error.message)
        }finally {
            setIsLoading(false)
        }
    }

    return (
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
                                label="Name"
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                        rules={{
                            required: 'Enter your name',
                            validate: value => value.trim() === 'Enter your name' ? '' : undefined
                        }}
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                </div>
                <div>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <InputFloatingLabel
                                label="Email"
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                        rules={{
                            required: 'Enter your email',
                            validate: value => !isValidEmail(value) ? 'The email is not valid' : undefined
                        }}
                    />
                    {errors.email && (
                        <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                </div>
                <div className="sm:col-span-2">
                    <select
                        className="w-full py-3 md:py-4 text-gray-500 font-semibold rounded-md px-4"
                        {...register('role', {
                            validate: value => value.trim() === '' ? 'Please, select an option' : undefined
                        })}
                    >
                        <option value="">¿Do you are an employee or company?</option>
                        <option value="employee">Employee</option>
                        <option value="company">Company</option>
                    </select>
                </div>
                {errors.role && (
                    <span className="text-sm text-red-500">{errors.role.message}</span>
                )}
            </div>
            <button 
                disabled={isLoading}
                className="uppercase bg-yellow-600 hover:bg-yellow-500 transition disabled:hover:bg-yellow-600 disabled:opacity-50 text-white font-bold w-full text-lg rounded-md py-3 mt-4 sm:mt-2"
            >
                {isLoading ? 'Registering...' : 'join now'}
            </button>
        </form>
    )
}


