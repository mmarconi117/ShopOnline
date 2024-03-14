export const validateForm = (storeData) => {
  const errors = {};

  if (!storeData || !storeData.name || storeData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!storeData || !storeData.email || storeData.email.trim() === '' || !emailRegex.test(storeData.email)) {
    errors.email = 'Valid email is required';
  }

  if (!storeData || !storeData.password || storeData.password.trim() === '') {
    errors.password = 'Password is required';
    if(storeData.password.length < 6){
      errors.password = 'password should be at least 6 characters';
    }
  }
  if (!storeData || !storeData.conPassword || storeData.conPassword.trim() === '') {
    errors.conPassword = 'Confirm Password is required';
  }
  if(storeData.password !== storeData.conPassword){
    errors.conPassword = 'password do not match';
  }

  return errors;
};