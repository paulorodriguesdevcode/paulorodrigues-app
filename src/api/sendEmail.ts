import axios from 'axios'

interface IBodyEmail {
    name: string,
    email: string
}

export const sendEmail = async (data: IBodyEmail) => (
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_USER_ID,
        template_params: {
            from_name: data.name,
            message: `Nome: ${data.name}\nEmail: ${data.email}\nData: ${new Date()}`
        }
    })
)