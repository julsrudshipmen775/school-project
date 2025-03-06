const generateRandomCode = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const randomString = `code${randomNumber}`;
  return randomString;
};
