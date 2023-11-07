export function DashboardItem(LI, logout) {
  return {
    links: [
      { name: "Account Information", link: "/dashboard" },
      // { name: "Saved Cards", link: "/dashboard/credit-cards" },
      // { name: "Refer & Earn", link: "/dashboard/referrer" },
      // { name: "Orders", link: "/dashboard/orders" },
      {
        name: (
          <LI
            text={"Logout"}
            src={"/logout.svg"}
            color="red"
            reverse={1}
            space={1}
            href={"/auth/login"}
            showImg={1}
            handle={logout}
          />
        ),
        link: "/auth/login",
      },
    ],
  };
}
