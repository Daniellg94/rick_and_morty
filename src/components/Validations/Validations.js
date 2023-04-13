const Validations = (userData) => {

    let errors = {}
    const regexNumber = /\d+/;

    if (!userData.email){
        errors.email = 'no puede estar vacio'
    }
    if (!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'por favor digite un correo valido ej: rick@Skuanshi.com'
    }
    if (userData.email.length > 35){
        errors.email = 'voy a explotar!!'
    }
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'debe tener entre 6 y 10 caracteres'
    }
    if (!regexNumber.test(userData.password)){
        errors.password = 'debe tener al menos 1 numero'
    }
    return errors
}

export default Validations
