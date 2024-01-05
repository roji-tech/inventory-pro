export const update_order = async (axios, data) => {
  // PAYPAL UPDATE BACKEND ORDER
  const item = {
    ref_id: data?.id,
    status: data?.status,
    id: data?.purchase_units[0]?.reference_id,
    desc: data?.purchase_units[0].description,
  };
  try {
    const resp = await axios.post("/api/payments/update_order", { data: item });
    // alert(JSON.stringify("item"));
    // alert(JSON.stringify(item));

    return {
      response: await resp.data,
    };
  } catch (error) {
    // alert("error===============");
    throw error;
  }
};
