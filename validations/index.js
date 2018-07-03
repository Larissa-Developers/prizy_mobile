export function validateLogin (values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Το Email είναι κενό.'
  }

  if (!values.password) {
    errors.password = 'Ο κωδικός είναι κενός.'
  }

  return errors
}