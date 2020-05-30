export function validateSignUp(values) {
  let errors = {};
  if(values.name === '') {
    errors.name = 'Su nombre no puede estar vacio';
  }
  if(values.lastName === '') {
    errors.lastName = 'Su apellido no puede estar vacio';
  }
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(values.email)) {
    errors.email = 'Ingrese un mail valido';
    if(values.email === '') {
      errors.email = 'Su email no puede estar vacio';
    }
  }
  if(values.password.length < 8) {
    errors.password = 'La contrasena tiene que ser mayor a 8 caracteres';
  }
  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Las contrasenas no son iguales';
  }
  if(!values.terms) {
    errors.terms = 'aceptar teminos y condiciones';
  }
  return { errors };
}

export function validateSignIn(values) {
  let errors = {};
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(values.email)) {
    errors.email = 'Ingrese un email valido';
  }
  return { errors };
}