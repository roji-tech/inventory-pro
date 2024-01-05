// currency
const handlePaypalCheckout = async (axios, amount, data, type) => {
  let res = { status: 400 };
  try {
    const response = await axios.post("/api/payments/paypal", {
      amount,
      data,
      type,
    });

    // console.log(response?.data);
    globalThis.location.href = response?.data?.url;
    res.status = 200;
  } catch (error) {
    console.log(error);
    res.status = 400;
    throw error;
  } finally {
    return res;
  }
};

export default handlePaypalCheckout;
