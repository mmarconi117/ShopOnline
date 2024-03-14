export const validateForm = (storeData) => {
  const errors = {};

  if (!storeData || !storeData.name || storeData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!storeData || !storeData.email || storeData.email.trim() === '' || !emailRegex.test(storeData.email)) {
    errors.email = 'Valid work email is required';
  }

  if (!storeData || !storeData.business_name || storeData.business_name.trim() === '') {
    errors.business_name = 'Legal business name is required';
  }

  if (!storeData || !storeData.password || storeData.password.trim() === '') {
    errors.password = 'Password is required';
  }

  return errors;
};