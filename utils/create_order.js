export const create_order = async (
  axios,
  amount,
  data,
  type,
  gateway,
  logout1,
) => {
  try {
    const resp = await axios.post("/api/payments/create_order", {
      amount,
      data,
      type,
      gateway,
    });

    return {
      response: await resp.data,
    };
  } catch (error) {
    if (logout1) {
      logout1();
    }
    throw error;
  }
};
