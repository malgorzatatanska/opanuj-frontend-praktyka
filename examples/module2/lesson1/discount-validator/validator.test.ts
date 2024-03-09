import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain(
      'First name is required and need to be at least 2 characters long'
    );
  });

  test('should return an error if firstname is too short', () => {
    const error = formValidator('J', 'Doe', 30);
    expect(error).toContain(
      'First name is required and need to be at least 2 characters long'
    );
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain(
      'Last name is required and need to be at least 2 characters long'
    );
  });

  test('should return an error if lastname is too short', () => {
    const error = formValidator('Jan', 'D', 30);
    expect(error).toContain(
      'Last name is required and need to be at least 2 characters long'
    );
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return empty array if all fields are valid', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors.length).toEqual(0);
  });

  test('should throw an error if age is not a number', () => {
    expect(() => {
      formValidator('John', 'Doe', '30' as any);
    }).toThrowError();
  });
});
