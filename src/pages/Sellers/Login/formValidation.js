export const validateForm = (storeData) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!storeData || !storeData.email || storeData.email.trim() === '' || !emailRegex.test(storeData.email)) {
    errors.email = 'Valid email is required';
  }

  if (!storeData || !storeData.password || storeData.password.trim() === '') {
    errors.password = 'Password is required';
  }

  return errors;
};