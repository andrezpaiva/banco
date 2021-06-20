export function validateEmptyAndLength3 (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }

  if (value.length < 3) {
    return 'Este campo precisa ter no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return 'Este campo precisa ser um e-mail'
  }

  return true
}

export function validateEmptyAndCPF (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }

  const cpf = value.replace(/[^\d]+/g, '')
  var add = 0

  if (cpf.length !== 11 || cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' || cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666' || cpf === '77777777777' || cpf === '88888888888' || cpf === '99999999999') { return 'CPF inválido' }

  for (var i = 0; i < 9; i++) { add += parseInt(cpf.charAt(i)) * (10 - i) }

  var rev = 11 - (add % 11)

  if (rev === 10 || rev === 11) { rev = 0 }
  if (rev !== parseInt(cpf.charAt(9))) { return 'CPF inválido' }

  add = 0

  for (i = 0; i < 10; i++) { add += parseInt(cpf.charAt(i)) * (11 - i) }

  rev = 11 - (add % 11)

  if (rev === 10 || rev === 11) { rev = 0 }
  if (rev !== parseInt(cpf.charAt(10))) { return 'CPF inválido' }

  return true
}
