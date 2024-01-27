export const validateForm = (storeData) => {
  const errors = {};

  if (!storeData || !storeData.name || storeData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!storeData || !storeData.workEmail || storeData.workEmail.trim() === '' || !emailRegex.test(storeData.workEmail)) {
    errors.workEmail = 'Valid work email is required';
  }

  if (!storeData || !storeData.legalBusinessName || storeData.legalBusinessName.trim() === '') {
    errors.legalBusinessName = 'Legal business name is required';
  }

  if (!storeData || !storeData.password || storeData.password.trim() === '') {
    errors.password = 'Password is required';
  }

  return errors;
};