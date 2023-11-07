export const PARTNER_LINKS = [
  {
    name: "Myworldsim Partner Hub",
    link: "/partner-with-us/partner-hub",
  },
  {
    name: "Affiliate Partners",
    link: "/partner-with-us/affiliate-partners",
  },
  {
    name: "Distribution Partners",
    link: "/partner-with-us/distribution-partners",
  },
  { name: "API Partners", link: "/partner-with-us/api-partners" },
  { name: "For Coperates", link: "/partner-with-us/corporates" },
  { name: "Partners Login", link: "/partner-with-us/login" },
];

export const ABOUTLINkS = [
  { name: "About Myworldsim", link: "/about-us" },
  { name: "Our Impact", link: "/about-us/impact" },
];

export const COUNTRIES = [
  {
    name: "United States",
    code: "/country/US",
  },
  {
    name: "United Kingdom",
    code: "/country/UK",
  },
  {
    name: "Turkey",
    code: "/country/TK",
  },
  {
    name: "France",
    code: "/country/FR",
  },
  {
    name: "Italy",
    code: "/country/",
  },
  {
    name: "Germany",
    code: "/country/",
  },
  {
    name: "Spain",
    code: "/country/",
  },
  {
    name: "Canada",
    code: "/country/CA",
  },
  {
    name: "Japan",
    code: "/country/",
  },
  {
    name: "United Arab Emirates",
    code: "/country/AE",
  },
];

export const PARTNERS = [
  {
    name: "MyWorldSim Partner Hub",
    link: "",
  },
  {
    name: "Affiliate Partners",
    link: "",
  },
  {
    name: "Distribution Partners",
    link: "",
  },
  {
    name: "API Partners",
    link: "",
  },
  {
    name: "MyWorldSim for Corporates",
    link: "",
  },
  {
    name: "Partner Login",
    link: "",
  },
];

export const MORE_INFO = [
  {
    name: "Contact Us",
    link: "/help/contact",
  },
  {
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export const CAREERS = [
  {
    name: "Working at MyWorldSim",
    link: "",
  },
  {
    name: "Job Vacancies",
    link: "",
  },
];

export const NAVLINkS = [
  // {
  //   title: "Partner with Us",
  //   links: [...PARTNER_LINKS],
  // },
  {
    title: "About Us",
    links: [...ABOUTLINkS],
  },
];

export const userItem = {
  title: <img src="/user.svg" alt="" width={25} />,
  links: [
    { name: "Sign In", link: "/auth/login" },
    { name: "Create Account", link: "/auth/signup" },
  ],
};

export const userItem1 = (LI, logout) => ({
  title: <img src="/user.svg" alt="" width={25} />,
  links: [
    { name: "Account Information", link: "/dashboard" },
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
});
