export const get_price = (price, increment, type) => {
  let amount = 4;

  try {
    amount = increment?.[type]?.amount || increment?.all?.amount || amount;

    if (increment?.[type]?.unit == "percentage") {
      return price * amount;
    }

    if (!type & (increment?.all?.unit == "percentage")) {
      return price * amount;
    }

    return price + amount;
  } catch (error) {
    console.warn(error);
    return price + amount;
  }
};
