export const handleSocialLogin = async (func, type, setLoading, logout) => {
  try {
    setLoading(true);
    await func(type);
  } catch (error) {
    logout();
  } finally {
    setLoading(false);
  }
};
