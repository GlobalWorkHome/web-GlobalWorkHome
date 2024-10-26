
import { Resend } from 'resend'


export const sendWaitlistEmail = async({ name, email, role }) => {

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
        from: 'Global Work Home <onboarding@resend.dev>',
        // to: [ email ],
        to: 'globalworkhomes@gmail.com',
        subject: 'Welcome to the Global Home Work Waitlist!',
        html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h1 style="color: #ca8a04;">Welcome to Global Work Home!</h1>
            <p>Hi ${name},</p>
            <p>Thank you for joining our waitlist! You’re one step closer to unlocking flexible and impactful work-from-home opportunities that fit your life.</p>
            <p>As part of our community, you’ll be the first to receive updates on:</p>
            <ul>
                <li>Early access to exclusive work-from-home roles</li>
                <li>Industry insights and tips to excel remotely</li>
                <li>Personalized recommendations for remote work options</li>
            </ul>
            <p>We’re thrilled to have you with us as we build the future of remote work together. Stay tuned!</p>
            <p>Best regards,</p>
            <p><strong>The Global Work Home Team</strong></p>
        </div>
    `
    });

    if (error) {
        return console.error({ error })
      }

      console.log({ data })
}
