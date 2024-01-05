const getUsername = (email) => {
  const username = String(email).split("@")[0];
  return username;
};

export default getUsername;
