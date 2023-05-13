const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPasswordNumber = /[0-9]/

export default function validation (inputs) {
    const errors = {};

    if (!inputs.email) {
        errors.email1 = "Este campo no puede estar vacío"
    }
    if (!regexEmail.test(inputs.email)) {
        errors.email2 = "Debe ser un correo electrónico"
    }
    if (inputs.email.length > 35) {
        errors.email3 = "Debe tener menos de 35 caracteres"
    }
    if (!regexPasswordNumber.test(inputs.password)) {
        errors.password1 = "Debe tener por lo menos un número"
    }
    if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password2 = "La contraseña debe tener entre 6 y 10 caracteres"
    }
    

    return errors
}