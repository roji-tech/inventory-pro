import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "@config";
import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ items }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: items,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
