const coveragesList = [
  {
    name: "MX",
    networks: [
      {
        name: "Movistar",
        types: ["LTE"],
      },
      {
        name: "AT&T",
        types: ["LTE"],
      },
    ],
  },
];

export function coveragesToStr(coveragesList) {
  const coveragesListNames = [];
  for (const cov of coveragesList) {
    const covName = cov.name;
    const networks = cov.networks || [];

    const nets = networks.map((net) => `${net.name}::${net.types.join(",")}`);

    coveragesListNames.push(`${covName}--${nets.join("!!")}`);
  }

  const coverages = coveragesListNames.join("__");
  console.log(coverages);
  return coverages;
}

export function coveragesToList(coverages) {
  const coveragesList = [];
  const coverageEntries = coverages.split("__");

  for (const entry of coverageEntries) {
    const [covName, netsInfo] = entry.split("--");
    const netsInfoList = netsInfo.split("!!");

    const networks = [];
    for (const netInfo of netsInfoList) {
      const [netName, netTypes] = netInfo.split("::");
      const netTypesList = netTypes.split(",");

      const network = {
        name: netName,
        types: netTypesList,
      };
      networks.push(network);
    }

    const coverage = {
      name: covName,
      networks: networks,
    };
    coveragesList.push(coverage);
  }

  // console.log(JSON.stringify(coveragesList, null, 2));
  return coveragesList;
}

// Usage example
// const coveragesStr = coveragesToStr(coveragesList);
// const coveragesListFromStr = coveragesToList(coveragesStr);
// coveragesToList("US--AT&T::LTE__FR--Orange::LTE__CN--China Mobile::LTE__ES--Vodafone::LTE__IT--TIM::LTE__TR--Vodafone::LTE__GB--Vodafone::LTE__DE--Vodafone::LTE__MX--Telcel::LTE__TH--AIS/AWN::LTE__HK--CSL::LTE__MY--Celcom::3G__GR--Vodafone::LTE__CA--Bell::LTE__KR--SK Telecom::LTE__JP--Softbank::LTE__SG--Starhub::LTE__FI--Aland::3G!!DNA::LTE__AL--Vodafone::LTE__AR--Claro::3G__AU--Telstra::3G__AT--3 Drei::LTE__AZ--Azercell::LTE__BE--Orange::LTE!!Proximus::LTE__BG--A1::LTE__BA--Eronet::LTE__BY--A1::LTE__BR--Claro::LTE__CH--Sunrise::LTE__CL--Entel::LTE__CO--Claro::3G__CY--Vodafone::3G__CZ--Vodafone::LTE__DK--3::LTE!!Telenor::LTE__DO--Claro::3G__EC--Claro::3G__EE--EMT::LTE__GE--MagtiCom::3G__GI--Gibtel::LTE__HR--A1::LTE__HU--T-Mobile::LTE__ID--Excelcom(XL)::LTE__IN--Vodafone::3G!!Idea::3G__IE--Vodafone::LTE__IQ--Zain::3G__IS--Nova::LTE__IL--Orange::3G__JE--JT::3G__KH--Smart::LTE__KW--Zain::3G__LI--FL1::3G__LK--3::3G!!Dialog::LTE__LT--Telia::LTE__LU--Tango::LTE__LV--LMT::LTE__MO--3::3G__MD--Moldova::3G__MK--A1::LTE__MT--Vodafone::LTE__ME--Telenor::LTE__NL--Vodafone::LTE__NO--Telenor::LTE__NZ--Vodafone::LTE__PA--Claro::3G__PE--Claro::3G__PH--Smart::LTE__PL--Orange::LTE!!Plus::LTE__PR--AT&T::LTE__PT--Vodafone::LTE__PY--Claro::3G__QA--Ooredoo::3G__RO--Vodafone::LTE__RU--Beeline::LTE__SA--Zain::LTE__SD--Zain::3G__RS--Telenor::LTE__SK--Orange::LTE__SI--A1::LTE__SE--3::LTE!!Telenor::LTE__TJ--Beeline::3G__TW--Chungwa::LTE__UA--lifecell::3G__VI--AT&T::LTE__VN--Vietnamobile::3G__ZA--Vodacom::LTE__XK--Vala::LTE")
