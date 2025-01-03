import { NextResponse } from "next/server";

// Data statis untuk stasiun
const stations = [
  {
    id: "AC",
    name: "ANCOL",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "AK",
    name: "ANGKE",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BJD",
    name: "BOJONGGEDE",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BKS",
    name: "BEKASI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BKST",
    name: "BEKASI TIMUR",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BOI",
    name: "BOJONG INDAH",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BOO",
    name: "BOGOR",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BPR",
    name: "BATU CEPER",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BUA",
    name: "BUARAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CBN",
    name: "CIBINONG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CC",
    name: "CICAYUR",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CIT",
    name: "CIBITUNG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CJT",
    name: "CILEJIT",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CKI",
    name: "CIKINI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CKR",
    name: "CIKARANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CKY",
    name: "CIKOYA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CLT",
    name: "CILEBUT",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CSK",
    name: "CISAUK",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CTA",
    name: "CITAYAM",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CTR",
    name: "CITERAS",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CUK",
    name: "CAKUNG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CW",
    name: "CAWANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "DAR",
    name: "DARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "DP",
    name: "DEPOK",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "DPB",
    name: "DEPOK BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "DRN",
    name: "DUREN KALIBATA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "DU",
    name: "DURI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "GDD",
    name: "GONDANGDIA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "GGL",
    name: "GROGOL",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "GST",
    name: "GANG SENTIONG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "JAKK",
    name: "JAKARTA KOTA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "JAY",
    name: "JAYAKARTA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "JMU",
    name: "JURANG MANGU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "JNG",
    name: "JATINEGARA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "JUA",
    name: "JUANDA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KAT",
    name: "KARET",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KBY",
    name: "KEBAYORAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KDS",
    name: "KALIDERES",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KLD",
    name: "KLENDER",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KLDB",
    name: "KLENDER BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KMO",
    name: "KEMAYORAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KMT",
    name: "KRAMAT",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KPB",
    name: "KAMPUNG BANDAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KRI",
    name: "KRANJI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "LNA",
    name: "LENTENG AGUNG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "MGB",
    name: "MANGGA BESAR",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "MJ",
    name: "MAJA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "MTR",
    name: "MATRAMAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "MRI",
    name: "MANGGARAI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TLM",
    name: "METLAND TELAGAMURNI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "NMO",
    name: "NAMBO",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PDRG",
    name: "PONDOK RAJEG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PDJ",
    name: "PONDOK RANJI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PI",
    name: "PORIS",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PLM",
    name: "PALMERAH",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "POC",
    name: "PONDOK CINA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "POK",
    name: "PONDOK JATI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PRP",
    name: "PARUNG PANJANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PSE",
    name: "PASAR SENEN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PSG",
    name: "PESING",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PSM",
    name: "PASAR MINGGU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "PSMB",
    name: "PASAR MINGGU BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "RJW",
    name: "RAJAWALI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "RU",
    name: "RAWA BUNTU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "RW",
    name: "RAWA BUAYA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SDM",
    name: "SUDIMARA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SRP",
    name: "SERPONG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SUDB",
    name: "SUDIRMAN BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SUD",
    name: "SUDIRMAN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SW",
    name: "SAWAH BESAR",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TB",
    name: "TAMBUN",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TEB",
    name: "TEBET",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TEJ",
    name: "TENJO",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TGS",
    name: "TIGARAKSA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "THB",
    name: "TANAH ABANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TKO",
    name: "TAMAN KOTA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TNG",
    name: "TANGERANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TNT",
    name: "TANJUNG BARAT",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TPK",
    name: "TANJUNG PRIOK",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TTI",
    name: "TANAH TINGGI",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "UI",
    name: "UNIV. INDONESIA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "UP",
    name: "UNIV. PANCASILA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "BBN",
    name: "BRAMBANAN",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "CE",
    name: "CEPER",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "DL",
    name: "DELANGGU",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "GW",
    name: "GAWOK",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "JN",
    name: "JENAR",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "KT",
    name: "KLATEN",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "KTA",
    name: "KUTOARJO",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "LPN",
    name: "LEMPUYANGAN",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "MGW",
    name: "MAGUWO",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "PWS",
    name: "PURWOSARI",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "SLO",
    name: "SOLO BALAPAN",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "SWT",
    name: "SROWOT",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "WJ",
    name: "WOJO",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "WT",
    name: "WATES",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "YK",
    name: "YOGYAKARTA",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "PL",
    name: "PALUR",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "SK",
    name: "SOLO JEBRES",
    group_wil: 6,
    fg_enable: 1,
  },
  {
    id: "JBU",
    name: "JAMBU BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CT",
    name: "CATANG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CKL",
    name: "CIKEUSAL",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "WLT",
    name: "WALANTAKA",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KRA",
    name: "KARANGANTU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "SG",
    name: "SERANG",
    group_wil: 0,
    fg_enable: 0,
  },
  {
    id: "RK",
    name: "RANGKASBITUNG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "TOJB",
    name: "TONJONG BARU",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "CLG",
    name: "CILEGON",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "KEN",
    name: "KRENCENG",
    group_wil: 0,
    fg_enable: 1,
  },
  {
    id: "MER",
    name: "MERAK",
    group_wil: 0,
    fg_enable: 1,
  },
];

// Menangani GET request di route /api/station
export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: stations,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}