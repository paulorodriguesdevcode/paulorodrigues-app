import { ToastContainer, toast } from 'react-toastify';

interface IAlert {
    message: MessagesToastEnum,
    isLoading?: boolean
}

export enum MessagesToastEnum {
    successEmail = "Email enviado! Segure a ansiedade :) Agora é só esperar em breve entraremos em contato.",
    errorEmail = "Ocorreu um erro no processo de envio de email, por favor, tente mais tarde.",
    errorFieldsMandatory = "Por favor, preencha seu nome e email.",
    sendingEmail = "Email sendo enviado..."
}

export const Alert = ({ message, isLoading = false }: IAlert) => toast(message, {
    position: "bottom-center",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    isLoading
});