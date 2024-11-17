'use server'
import prisma from "@/lib/prisma"
import { sendWaitlistEmail } from "@/lib/sendEmail"


export const subscribeToTheWaitinglist = async({ name, email, role }) => {

    email = email.trim().toLowerCase()

    try {

        const user = await prisma.waitlist.findUnique({
            where: {
                email
            }
        })
    
        if( user ){
            throw new Error('There is already a registered user with that email')
        }
        
        const registeredUser = await prisma.waitlist.create({
            data: {
                name,
                email,
                role
            }
        })

        // Enviar correo
        await sendWaitlistEmail({ name, email, role })

        return {
            erorr: null,
            user: registeredUser
        }

    } catch (error) {
        console.log(error)
        return {
            erorr: error.message,
            user: null
        }
    }
}