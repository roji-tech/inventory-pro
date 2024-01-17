import GeneralLayout from "@layouts/GeneralLayout";
import NewOrder from "@mypages/orders/NewOrder";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Orders() {
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {}, []);

  return (
    <GeneralLayout>
      <NewOrder pid={pid} />
    </GeneralLayout>
  );
}
