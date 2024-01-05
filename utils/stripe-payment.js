import getStripe from "@utils/get-stripejs";

// currency
const handleStripeCheckout = async (axios, amount, data, type) => {
  let res = { status: 400 };
  try {
    const response = await axios.post("/api/payments/stripe", {
      amount,
      data,
      type,
    });
    // alert(JSON.stringify(response?.data));
    const stripe = await getStripe();
    console.log(response?.data);
    const { error } = await stripe.redirectToCheckout({
      sessionId: response?.data?.stripe_id,
    });
    res.status = 200;
  } catch (error) {
    console.log(error);
    res.status = 400;
    throw error;
  } finally {
    return res;
  }
};

export default handleStripeCheckout;
