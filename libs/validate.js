export function validateSignUp(values) {
  let errors = {};
  if(values.name === '') {
    errors.name = 'Su nombre no puede estar vacío';
  }
  if(values.lastName === '') {
    errors.lastName = 'Su apellido no puede estar vacío';
  }
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(values.email)) {
    errors.email = 'Ingrese un mail válido';
    if(values.email === '') {
      errors.email = 'Su email no puede estar vacío';
    }
  }
  if(values.password.length < 8) {
    errors.password = 'La contraseña tiene que ser mayor a 8 caracteres';
  }
  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no son iguales';
  }
  if(!values.terms) {
    errors.terms = 'aceptar términos y condiciones';
  }
  return { errors };
}

export function validateSignIn(values) {
  let errors = {};
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(values.email)) {
    errors.email = 'Ingrese un email válido';
  }
  return { errors };
}

export function validatePersonalData(values) {
  let errors = {};
  if(values.name === '') {
    errors.name = 'Su nombre no puede estar vacío';
  }
  if(values.lastName === '') {
    errors.lastName = 'Su apellido no puede estar vacío';
  }
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(values.email)) {
    errors.email = 'Ingrese un mail válido';
    if(values.email === '') {
      errors.email = 'Su email no puede estar vacío';
    }
  }
  if(values.dni.length > 9 || values.dni.length < 8){
    errors.dni = 'Ingrese un dni válido';
    if(!values.dni) {
      errors.dni = 'Este campo no puede estar vacío';
    }
  }
  if(values.numberPhone.length < 8) {
    errors.numberPhone = 'Ingrese un número de teléfono válido';
    if(!values.numberPhone) {
      errors.numberPhone = 'Este campo no puede estar vacío';
    }
  }
  return { errors };
}

//
// ─── VALIDATE DATOSENVIO ────────────────────────────────────────────────────────
//
export function validateDatosEnvio(values) {
  let errors = {};
  if(values.CP === '') {
    errors.CP = 'Ingrese su codigo postal';
  }
  if(values.address === '') {
    errors.address = 'Ingrese una direccion de envio';
  }
  if(values.number === '') {
    errors.number = 'Este campo no puede estar vacío';
  }
  if(values.city === '') {
    errors.city = 'Este campo no puede estar vacío';
  }
  if(values.provincia === '') {
    errors.provincia = 'Este campo no puede estar vacío';
  }
  return { errors };
}