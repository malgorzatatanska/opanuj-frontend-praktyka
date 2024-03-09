export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName || firstName.length <= 1) {
    errors.push(
      'First name is required and need to be at least 2 characters long'
    );
  }

  if (!lastName || lastName.length <= 1) {
    errors.push(
      'Last name is required and need to be at least 2 characters long'
    );
  }

  if (typeof age !== 'number') {
    throw new Error('Age must be a number');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
