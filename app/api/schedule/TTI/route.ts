import { NextResponse } from "next/server";

const TTI = [
  {
    train_id: "2026",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "00:13:00",
    color: "#623814",
    dest_time: "00:16:00",
  },
  {
    train_id: "1903",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "04:28:00",
    color: "#623814",
    dest_time: "04:53:00",
  },
  {
    train_id: "1905A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "04:56:00",
    color: "#623814",
    dest_time: "05:21:00",
  },
  {
    train_id: "1907",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "05:09:00",
    color: "#623814",
    dest_time: "05:34:00",
  },
  {
    train_id: "1909A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "05:26:00",
    color: "#623814",
    dest_time: "05:51:00",
  },
  {
    train_id: "1904",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "05:36:00",
    color: "#623814",
    dest_time: "05:39:00",
  },
  {
    train_id: "1911",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "05:40:00",
    color: "#623814",
    dest_time: "06:05:00",
  },
  {
    train_id: "1906A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "05:53:00",
    color: "#623814",
    dest_time: "05:56:00",
  },
  {
    train_id: "1913A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "05:56:00",
    color: "#623814",
    dest_time: "06:21:00",
  },
  {
    train_id: "1908",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "06:08:00",
    color: "#623814",
    dest_time: "06:11:00",
  },
  {
    train_id: "1915",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "06:09:00",
    color: "#623814",
    dest_time: "06:34:00",
  },
  {
    train_id: "1910A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "06:23:00",
    color: "#623814",
    dest_time: "06:26:00",
  },
  {
    train_id: "1917A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "06:26:00",
    color: "#623814",
    dest_time: "06:51:00",
  },
  {
    train_id: "1912",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "06:38:00",
    color: "#623814",
    dest_time: "06:41:00",
  },
  {
    train_id: "1919",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "06:40:00",
    color: "#623814",
    dest_time: "07:05:00",
  },
  {
    train_id: "1914A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "06:53:00",
    color: "#623814",
    dest_time: "06:56:00",
  },
  {
    train_id: "1921A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "06:56:00",
    color: "#623814",
    dest_time: "07:21:00",
  },
  {
    train_id: "1916",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "07:07:00",
    color: "#623814",
    dest_time: "07:10:00",
  },
  {
    train_id: "1923",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "07:09:00",
    color: "#623814",
    dest_time: "07:34:00",
  },
  {
    train_id: "1918A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "07:23:00",
    color: "#623814",
    dest_time: "07:26:00",
  },
  {
    train_id: "1925A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "07:26:00",
    color: "#623814",
    dest_time: "07:51:00",
  },
  {
    train_id: "1920",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "07:38:00",
    color: "#623814",
    dest_time: "07:41:00",
  },
  {
    train_id: "1927",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "07:40:00",
    color: "#623814",
    dest_time: "08:05:00",
  },
  {
    train_id: "1922A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "07:53:00",
    color: "#623814",
    dest_time: "07:56:00",
  },
  {
    train_id: "1929A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "07:56:00",
    color: "#623814",
    dest_time: "08:21:00",
  },
  {
    train_id: "1924",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "08:07:00",
    color: "#623814",
    dest_time: "08:10:00",
  },
  {
    train_id: "1931",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "08:09:00",
    color: "#623814",
    dest_time: "08:34:00",
  },
  {
    train_id: "1926A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "08:23:00",
    color: "#623814",
    dest_time: "08:26:00",
  },
  {
    train_id: "1933A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "08:26:00",
    color: "#623814",
    dest_time: "08:51:00",
  },
  {
    train_id: "1928",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "08:38:00",
    color: "#623814",
    dest_time: "08:41:00",
  },
  {
    train_id: "1935",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "08:40:00",
    color: "#623814",
    dest_time: "09:05:00",
  },
  {
    train_id: "1930A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "08:53:00",
    color: "#623814",
    dest_time: "08:56:00",
  },
  {
    train_id: "1937A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "08:56:00",
    color: "#623814",
    dest_time: "09:21:00",
  },
  {
    train_id: "1932",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "09:07:00",
    color: "#623814",
    dest_time: "09:10:00",
  },
  {
    train_id: "1939",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "09:09:00",
    color: "#623814",
    dest_time: "09:34:00",
  },
  {
    train_id: "1934A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "09:23:00",
    color: "#623814",
    dest_time: "09:26:00",
  },
  {
    train_id: "1941A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "09:26:00",
    color: "#623814",
    dest_time: "09:51:00",
  },
  {
    train_id: "1936",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "09:38:00",
    color: "#623814",
    dest_time: "09:41:00",
  },
  {
    train_id: "1943",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "09:40:00",
    color: "#623814",
    dest_time: "10:05:00",
  },
  {
    train_id: "1938A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "09:53:00",
    color: "#623814",
    dest_time: "09:56:00",
  },
  {
    train_id: "1945A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "09:56:00",
    color: "#623814",
    dest_time: "10:21:00",
  },
  {
    train_id: "1940",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "10:07:00",
    color: "#623814",
    dest_time: "10:10:00",
  },
  {
    train_id: "1947",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "10:10:00",
    color: "#623814",
    dest_time: "10:35:00",
  },
  {
    train_id: "1942A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "10:23:00",
    color: "#623814",
    dest_time: "10:26:00",
  },
  {
    train_id: "1944",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "10:38:00",
    color: "#623814",
    dest_time: "10:41:00",
  },
  {
    train_id: "1949",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "10:40:00",
    color: "#623814",
    dest_time: "11:05:00",
  },
  {
    train_id: "1946A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "10:53:00",
    color: "#623814",
    dest_time: "10:56:00",
  },
  {
    train_id: "1948",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "11:07:00",
    color: "#623814",
    dest_time: "11:10:00",
  },
  {
    train_id: "1951",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "11:10:00",
    color: "#623814",
    dest_time: "11:35:00",
  },
  {
    train_id: "1950",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "11:38:00",
    color: "#623814",
    dest_time: "11:41:00",
  },
  {
    train_id: "1953",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "11:40:00",
    color: "#623814",
    dest_time: "12:05:00",
  },
  {
    train_id: "1952",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "12:07:00",
    color: "#623814",
    dest_time: "12:10:00",
  },
  {
    train_id: "1955",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "12:10:00",
    color: "#623814",
    dest_time: "12:35:00",
  },
  {
    train_id: "1954",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "12:38:00",
    color: "#623814",
    dest_time: "12:41:00",
  },
  {
    train_id: "1957",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "12:40:00",
    color: "#623814",
    dest_time: "13:05:00",
  },
  {
    train_id: "1956",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "13:07:00",
    color: "#623814",
    dest_time: "13:10:00",
  },
  {
    train_id: "1959",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "13:10:00",
    color: "#623814",
    dest_time: "13:35:00",
  },
  {
    train_id: "1958",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "13:38:00",
    color: "#623814",
    dest_time: "13:41:00",
  },
  {
    train_id: "1961",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "13:40:00",
    color: "#623814",
    dest_time: "14:05:00",
  },
  {
    train_id: "1960",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "14:07:00",
    color: "#623814",
    dest_time: "14:10:00",
  },
  {
    train_id: "1963",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "14:10:00",
    color: "#623814",
    dest_time: "14:35:00",
  },
  {
    train_id: "1962",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "14:38:00",
    color: "#623814",
    dest_time: "14:41:00",
  },
  {
    train_id: "1965",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "14:40:00",
    color: "#623814",
    dest_time: "15:05:00",
  },
  {
    train_id: "1964",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "15:07:00",
    color: "#623814",
    dest_time: "15:10:00",
  },
  {
    train_id: "1967",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "15:10:00",
    color: "#623814",
    dest_time: "15:35:00",
  },
  {
    train_id: "1969A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "15:26:00",
    color: "#623814",
    dest_time: "15:51:00",
  },
  {
    train_id: "1966",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "15:38:00",
    color: "#623814",
    dest_time: "15:41:00",
  },
  {
    train_id: "1971",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "15:40:00",
    color: "#623814",
    dest_time: "16:05:00",
  },
  {
    train_id: "1973A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "15:56:00",
    color: "#623814",
    dest_time: "16:21:00",
  },
  {
    train_id: "1968",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "16:07:00",
    color: "#623814",
    dest_time: "16:10:00",
  },
  {
    train_id: "1975",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "16:09:00",
    color: "#623814",
    dest_time: "16:34:00",
  },
  {
    train_id: "1970A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "16:23:00",
    color: "#623814",
    dest_time: "16:26:00",
  },
  {
    train_id: "1977A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "16:26:00",
    color: "#623814",
    dest_time: "16:51:00",
  },
  {
    train_id: "1972",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "16:38:00",
    color: "#623814",
    dest_time: "16:41:00",
  },
  {
    train_id: "1979",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "16:40:00",
    color: "#623814",
    dest_time: "17:05:00",
  },
  {
    train_id: "1974A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "16:53:00",
    color: "#623814",
    dest_time: "16:56:00",
  },
  {
    train_id: "1981A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "16:56:00",
    color: "#623814",
    dest_time: "17:21:00",
  },
  {
    train_id: "1976",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "17:07:00",
    color: "#623814",
    dest_time: "17:10:00",
  },
  {
    train_id: "1983",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "17:09:00",
    color: "#623814",
    dest_time: "17:34:00",
  },
  {
    train_id: "1978A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "17:23:00",
    color: "#623814",
    dest_time: "17:26:00",
  },
  {
    train_id: "1985A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "17:26:00",
    color: "#623814",
    dest_time: "17:51:00",
  },
  {
    train_id: "1980",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "17:38:00",
    color: "#623814",
    dest_time: "17:41:00",
  },
  {
    train_id: "1987",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "17:40:00",
    color: "#623814",
    dest_time: "18:05:00",
  },
  {
    train_id: "1982A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "17:53:00",
    color: "#623814",
    dest_time: "17:56:00",
  },
  {
    train_id: "1989A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "17:56:00",
    color: "#623814",
    dest_time: "18:21:00",
  },
  {
    train_id: "1984",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "18:07:00",
    color: "#623814",
    dest_time: "18:10:00",
  },
  {
    train_id: "1991",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "18:09:00",
    color: "#623814",
    dest_time: "18:34:00",
  },
  {
    train_id: "1986A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "18:23:00",
    color: "#623814",
    dest_time: "18:26:00",
  },
  {
    train_id: "1993A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "18:26:00",
    color: "#623814",
    dest_time: "18:51:00",
  },
  {
    train_id: "1988",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "18:38:00",
    color: "#623814",
    dest_time: "18:41:00",
  },
  {
    train_id: "1995",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "18:40:00",
    color: "#623814",
    dest_time: "19:05:00",
  },
  {
    train_id: "1990A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "18:53:00",
    color: "#623814",
    dest_time: "18:56:00",
  },
  {
    train_id: "1997A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "18:56:00",
    color: "#623814",
    dest_time: "19:21:00",
  },
  {
    train_id: "1992",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "19:07:00",
    color: "#623814",
    dest_time: "19:10:00",
  },
  {
    train_id: "1999",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "19:09:00",
    color: "#623814",
    dest_time: "19:34:00",
  },
  {
    train_id: "1994A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "19:23:00",
    color: "#623814",
    dest_time: "19:26:00",
  },
  {
    train_id: "2001A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "19:26:00",
    color: "#623814",
    dest_time: "19:51:00",
  },
  {
    train_id: "1996",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "19:38:00",
    color: "#623814",
    dest_time: "19:41:00",
  },
  {
    train_id: "2003",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "19:40:00",
    color: "#623814",
    dest_time: "20:05:00",
  },
  {
    train_id: "1998A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "19:53:00",
    color: "#623814",
    dest_time: "19:56:00",
  },
  {
    train_id: "2005A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "19:56:00",
    color: "#623814",
    dest_time: "20:21:00",
  },
  {
    train_id: "2000",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "20:07:00",
    color: "#623814",
    dest_time: "20:10:00",
  },
  {
    train_id: "2007",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "20:09:00",
    color: "#623814",
    dest_time: "20:34:00",
  },
  {
    train_id: "2002A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "20:23:00",
    color: "#623814",
    dest_time: "20:26:00",
  },
  {
    train_id: "2009A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "20:26:00",
    color: "#623814",
    dest_time: "20:51:00",
  },
  {
    train_id: "2004",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "20:38:00",
    color: "#623814",
    dest_time: "20:41:00",
  },
  {
    train_id: "2011",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "20:40:00",
    color: "#623814",
    dest_time: "21:05:00",
  },
  {
    train_id: "2006A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "20:53:00",
    color: "#623814",
    dest_time: "20:56:00",
  },
  {
    train_id: "2013",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "21:03:00",
    color: "#623814",
    dest_time: "21:28:00",
  },
  {
    train_id: "2008",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "21:07:00",
    color: "#623814",
    dest_time: "21:10:00",
  },
  {
    train_id: "2010A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "21:23:00",
    color: "#623814",
    dest_time: "21:26:00",
  },
  {
    train_id: "2015A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "21:26:00",
    color: "#623814",
    dest_time: "21:51:00",
  },
  {
    train_id: "2012",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "21:38:00",
    color: "#623814",
    dest_time: "21:41:00",
  },
  {
    train_id: "2017A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "21:56:00",
    color: "#623814",
    dest_time: "22:21:00",
  },
  {
    train_id: "2019",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "22:09:00",
    color: "#623814",
    dest_time: "22:34:00",
  },
  {
    train_id: "2016A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "22:23:00",
    color: "#623814",
    dest_time: "22:26:00",
  },
  {
    train_id: "2021",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "TANGERANG-DURI",
    dest: "DURI",
    time_est: "22:40:00",
    color: "#623814",
    dest_time: "23:05:00",
  },
  {
    train_id: "2018A",
    ka_name: "COMMUTER LINE TANGERANG",
    route_name: "DURI-TANGERANG",
    dest: "TANGERANG",
    time_est: "22:53:00",
    color: "#623814",
    dest_time: "22:56:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: TTI,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
