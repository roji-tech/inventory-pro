export async function isApplePayAvailable() {
  alert(window?.ApplePaySession?.canMakePayments());
  console.log(window?.ApplePaySession?.canMakePayments());
  return !!(window?.ApplePaySession?.canMakePayments());
}
