import { Resend } from 'resend'

export const sendEmail = async ({ to, subject, emailTemplate }) => {

    const resend = new Resend(process.env.RESEND_API_KEY);

    return new Promise(async(reject, resolve)=>{
        const { data, error } = await resend.emails.send({
            // from: 'Global Work Home <onboarding@resend.dev>', //Dev
            from: `Global Work Home <noreply@${process.env.RESEND_DOMAIN}>`,
            to: to,
            subject: subject,
            html: emailTemplate
        });
    
        if (error) {
            return reject(error)
        }

        resolve(data)
    })

}
