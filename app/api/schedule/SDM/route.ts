import { NextResponse } from "next/server";

const SDM = [
  {
    train_id: "1830",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "00:08:00",
    color: "#16812B",
    dest_time: "00:32:00",
  },
  {
    train_id: "1617",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:20:00",
    color: "#16812B",
    dest_time: "04:47:00",
  },
  {
    train_id: "1621",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:32:00",
    color: "#16812B",
    dest_time: "04:59:00",
  },
  {
    train_id: "1623",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:50:00",
    color: "#16812B",
    dest_time: "05:17:00",
  },
  {
    train_id: "1625",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:00:00",
    color: "#16812B",
    dest_time: "05:27:00",
  },
  {
    train_id: "1627",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:10:00",
    color: "#16812B",
    dest_time: "05:37:00",
  },
  {
    train_id: "1629",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:20:00",
    color: "#16812B",
    dest_time: "05:47:00",
  },
  {
    train_id: "1618",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "05:28:00",
    color: "#16812B",
    dest_time: "06:49:00",
  },
  {
    train_id: "1631",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:30:00",
    color: "#16812B",
    dest_time: "05:57:00",
  },
  {
    train_id: "1633",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:40:00",
    color: "#16812B",
    dest_time: "06:07:00",
  },
  {
    train_id: "1622A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "05:48:00",
    color: "#16812B",
    dest_time: "07:07:00",
  },
  {
    train_id: "1635",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:50:00",
    color: "#16812B",
    dest_time: "06:17:00",
  },
  {
    train_id: "1624A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "05:58:00",
    color: "#16812B",
    dest_time: "06:23:00",
  },
  {
    train_id: "1637",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:00:00",
    color: "#16812B",
    dest_time: "06:27:00",
  },
  {
    train_id: "1626",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "06:08:00",
    color: "#16812B",
    dest_time: "06:56:00",
  },
  {
    train_id: "1639A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:10:00",
    color: "#16812B",
    dest_time: "06:37:00",
  },
  {
    train_id: "1628",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:18:00",
    color: "#16812B",
    dest_time: "07:39:00",
  },
  {
    train_id: "1641",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:20:00",
    color: "#16812B",
    dest_time: "06:47:00",
  },
  {
    train_id: "1630",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:28:00",
    color: "#16812B",
    dest_time: "07:53:00",
  },
  {
    train_id: "1643A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:30:00",
    color: "#16812B",
    dest_time: "06:57:00",
  },
  {
    train_id: "1632",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "06:38:00",
    color: "#16812B",
    dest_time: "06:47:00",
  },
  {
    train_id: "1645A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:40:00",
    color: "#16812B",
    dest_time: "07:07:00",
  },
  {
    train_id: "1634A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:48:00",
    color: "#16812B",
    dest_time: "08:09:00",
  },
  {
    train_id: "1647",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:50:00",
    color: "#16812B",
    dest_time: "07:17:00",
  },
  {
    train_id: "1636B",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:58:00",
    color: "#16812B",
    dest_time: "08:23:00",
  },
  {
    train_id: "1649",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:00:00",
    color: "#16812B",
    dest_time: "07:27:00",
  },
  {
    train_id: "1638",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "07:08:00",
    color: "#16812B",
    dest_time: "07:32:00",
  },
  {
    train_id: "1651",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:10:00",
    color: "#16812B",
    dest_time: "07:37:00",
  },
  {
    train_id: "1640",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:18:00",
    color: "#16812B",
    dest_time: "08:37:00",
  },
  {
    train_id: "1653",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:20:00",
    color: "#16812B",
    dest_time: "07:47:00",
  },
  {
    train_id: "1642",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:28:00",
    color: "#16812B",
    dest_time: "08:51:00",
  },
  {
    train_id: "1655",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:30:00",
    color: "#16812B",
    dest_time: "07:57:00",
  },
  {
    train_id: "1644",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "07:38:00",
    color: "#16812B",
    dest_time: "08:27:00",
  },
  {
    train_id: "1657",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:40:00",
    color: "#16812B",
    dest_time: "08:07:00",
  },
  {
    train_id: "1646",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:48:00",
    color: "#16812B",
    dest_time: "09:07:00",
  },
  {
    train_id: "1659",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:50:00",
    color: "#16812B",
    dest_time: "08:17:00",
  },
  {
    train_id: "1648A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:58:00",
    color: "#16812B",
    dest_time: "09:22:00",
  },
  {
    train_id: "1661",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:00:00",
    color: "#16812B",
    dest_time: "08:27:00",
  },
  {
    train_id: "1650",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "08:08:00",
    color: "#16812B",
    dest_time: "08:17:00",
  },
  {
    train_id: "1663",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:10:00",
    color: "#16812B",
    dest_time: "08:37:00",
  },
  {
    train_id: "1652",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:18:00",
    color: "#16812B",
    dest_time: "09:37:00",
  },
  {
    train_id: "1665",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:20:00",
    color: "#16812B",
    dest_time: "08:47:00",
  },
  {
    train_id: "1654",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:28:00",
    color: "#16812B",
    dest_time: "09:51:00",
  },
  {
    train_id: "1667",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:30:00",
    color: "#16812B",
    dest_time: "08:57:00",
  },
  {
    train_id: "1656",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "08:38:00",
    color: "#16812B",
    dest_time: "09:02:00",
  },
  {
    train_id: "1658",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:48:00",
    color: "#16812B",
    dest_time: "10:07:00",
  },
  {
    train_id: "1671",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:50:00",
    color: "#16812B",
    dest_time: "09:17:00",
  },
  {
    train_id: "1660",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:58:00",
    color: "#16812B",
    dest_time: "10:21:00",
  },
  {
    train_id: "1673",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:00:00",
    color: "#16812B",
    dest_time: "09:27:00",
  },
  {
    train_id: "1662A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "09:08:00",
    color: "#16812B",
    dest_time: "09:33:00",
  },
  {
    train_id: "1675",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:10:00",
    color: "#16812B",
    dest_time: "09:37:00",
  },
  {
    train_id: "1664",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:18:00",
    color: "#16812B",
    dest_time: "10:37:00",
  },
  {
    train_id: "1679A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:27:00",
    color: "#16812B",
    dest_time: "09:55:00",
  },
  {
    train_id: "1666",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:28:00",
    color: "#16812B",
    dest_time: "10:51:00",
  },
  {
    train_id: "1681A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:37:00",
    color: "#16812B",
    dest_time: "10:05:00",
  },
  {
    train_id: "1668",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "09:38:00",
    color: "#16812B",
    dest_time: "09:47:00",
  },
  {
    train_id: "1683",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:50:00",
    color: "#16812B",
    dest_time: "10:17:00",
  },
  {
    train_id: "1672",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:58:00",
    color: "#16812B",
    dest_time: "11:21:00",
  },
  {
    train_id: "1685",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:00:00",
    color: "#16812B",
    dest_time: "10:27:00",
  },
  {
    train_id: "1687",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:10:00",
    color: "#16812B",
    dest_time: "10:37:00",
  },
  {
    train_id: "1676",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "10:18:00",
    color: "#16812B",
    dest_time: "11:36:00",
  },
  {
    train_id: "1689",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:20:00",
    color: "#16812B",
    dest_time: "10:47:00",
  },
  {
    train_id: "1678",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "10:28:00",
    color: "#16812B",
    dest_time: "11:50:00",
  },
  {
    train_id: "1691",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:30:00",
    color: "#16812B",
    dest_time: "10:57:00",
  },
  {
    train_id: "1680A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "10:38:00",
    color: "#16812B",
    dest_time: "11:03:00",
  },
  {
    train_id: "1693",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:40:00",
    color: "#16812B",
    dest_time: "11:07:00",
  },
  {
    train_id: "1682",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "10:48:00",
    color: "#16812B",
    dest_time: "11:12:00",
  },
  {
    train_id: "1695",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:50:00",
    color: "#16812B",
    dest_time: "11:17:00",
  },
  {
    train_id: "1686",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:08:00",
    color: "#16812B",
    dest_time: "12:27:00",
  },
  {
    train_id: "1699",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:10:00",
    color: "#16812B",
    dest_time: "11:37:00",
  },
  {
    train_id: "1688",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "11:18:00",
    color: "#16812B",
    dest_time: "11:42:00",
  },
  {
    train_id: "1703A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:20:00",
    color: "#16812B",
    dest_time: "11:47:00",
  },
  {
    train_id: "1690",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:28:00",
    color: "#16812B",
    dest_time: "12:47:00",
  },
  {
    train_id: "1705",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:40:00",
    color: "#16812B",
    dest_time: "12:07:00",
  },
  {
    train_id: "1694",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:48:00",
    color: "#16812B",
    dest_time: "13:07:00",
  },
  {
    train_id: "1707",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:50:00",
    color: "#16812B",
    dest_time: "12:17:00",
  },
  {
    train_id: "1696",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:58:00",
    color: "#16812B",
    dest_time: "13:21:00",
  },
  {
    train_id: "1711",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:10:00",
    color: "#16812B",
    dest_time: "12:37:00",
  },
  {
    train_id: "1700",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:18:00",
    color: "#16812B",
    dest_time: "13:37:00",
  },
  {
    train_id: "1713",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:20:00",
    color: "#16812B",
    dest_time: "12:47:00",
  },
  {
    train_id: "1704A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:28:00",
    color: "#16812B",
    dest_time: "13:54:00",
  },
  {
    train_id: "1717",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:40:00",
    color: "#16812B",
    dest_time: "13:07:00",
  },
  {
    train_id: "1706",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:48:00",
    color: "#16812B",
    dest_time: "14:08:00",
  },
  {
    train_id: "1719A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:50:00",
    color: "#16812B",
    dest_time: "13:17:00",
  },
  {
    train_id: "1708",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:58:00",
    color: "#16812B",
    dest_time: "14:22:00",
  },
  {
    train_id: "1723",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:10:00",
    color: "#16812B",
    dest_time: "13:37:00",
  },
  {
    train_id: "1712",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:18:00",
    color: "#16812B",
    dest_time: "14:37:00",
  },
  {
    train_id: "1725",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:20:00",
    color: "#16812B",
    dest_time: "13:47:00",
  },
  {
    train_id: "1714",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:28:00",
    color: "#16812B",
    dest_time: "14:51:00",
  },
  {
    train_id: "1727A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:40:00",
    color: "#16812B",
    dest_time: "14:07:00",
  },
  {
    train_id: "1718",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:48:00",
    color: "#16812B",
    dest_time: "15:07:00",
  },
  {
    train_id: "1729",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:50:00",
    color: "#16812B",
    dest_time: "14:17:00",
  },
  {
    train_id: "1720",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:58:00",
    color: "#16812B",
    dest_time: "15:21:00",
  },
  {
    train_id: "1733",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:13:00",
    color: "#16812B",
    dest_time: "14:40:00",
  },
  {
    train_id: "1724",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:18:00",
    color: "#16812B",
    dest_time: "15:37:00",
  },
  {
    train_id: "1726",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:28:00",
    color: "#16812B",
    dest_time: "15:51:00",
  },
  {
    train_id: "1737",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:30:00",
    color: "#16812B",
    dest_time: "14:57:00",
  },
  {
    train_id: "1730",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:48:00",
    color: "#16812B",
    dest_time: "16:07:00",
  },
  {
    train_id: "1741",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:50:00",
    color: "#16812B",
    dest_time: "15:17:00",
  },
  {
    train_id: "1732",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "14:58:00",
    color: "#16812B",
    dest_time: "15:22:00",
  },
  {
    train_id: "1743",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:00:00",
    color: "#16812B",
    dest_time: "15:27:00",
  },
  {
    train_id: "1745",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:10:00",
    color: "#16812B",
    dest_time: "15:37:00",
  },
  {
    train_id: "1734",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:18:00",
    color: "#16812B",
    dest_time: "16:37:00",
  },
  {
    train_id: "1747",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:20:00",
    color: "#16812B",
    dest_time: "15:47:00",
  },
  {
    train_id: "1736",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:28:00",
    color: "#16812B",
    dest_time: "16:51:00",
  },
  {
    train_id: "1749",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:30:00",
    color: "#16812B",
    dest_time: "15:57:00",
  },
  {
    train_id: "1738",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "15:38:00",
    color: "#16812B",
    dest_time: "15:47:00",
  },
  {
    train_id: "1751A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:40:00",
    color: "#16812B",
    dest_time: "16:07:00",
  },
  {
    train_id: "1740",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "15:48:00",
    color: "#16812B",
    dest_time: "16:12:00",
  },
  {
    train_id: "1753",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:50:00",
    color: "#16812B",
    dest_time: "16:17:00",
  },
  {
    train_id: "1742",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:58:00",
    color: "#16812B",
    dest_time: "17:17:00",
  },
  {
    train_id: "1755",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:00:00",
    color: "#16812B",
    dest_time: "16:27:00",
  },
  {
    train_id: "1744",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:08:00",
    color: "#16812B",
    dest_time: "17:31:00",
  },
  {
    train_id: "1757",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:10:00",
    color: "#16812B",
    dest_time: "16:37:00",
  },
  {
    train_id: "1746",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "16:18:00",
    color: "#16812B",
    dest_time: "16:42:00",
  },
  {
    train_id: "1759",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:20:00",
    color: "#16812B",
    dest_time: "16:47:00",
  },
  {
    train_id: "1748",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:28:00",
    color: "#16812B",
    dest_time: "17:47:00",
  },
  {
    train_id: "1761",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:30:00",
    color: "#16812B",
    dest_time: "16:57:00",
  },
  {
    train_id: "1750",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:38:00",
    color: "#16812B",
    dest_time: "18:01:00",
  },
  {
    train_id: "1763",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:40:00",
    color: "#16812B",
    dest_time: "17:07:00",
  },
  {
    train_id: "1752",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:48:00",
    color: "#16812B",
    dest_time: "18:15:00",
  },
  {
    train_id: "1765",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:50:00",
    color: "#16812B",
    dest_time: "17:17:00",
  },
  {
    train_id: "1754",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "16:58:00",
    color: "#16812B",
    dest_time: "17:22:00",
  },
  {
    train_id: "1767",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:00:00",
    color: "#16812B",
    dest_time: "17:27:00",
  },
  {
    train_id: "1756",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:08:00",
    color: "#16812B",
    dest_time: "18:29:00",
  },
  {
    train_id: "1769",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:10:00",
    color: "#16812B",
    dest_time: "17:37:00",
  },
  {
    train_id: "1758",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "17:18:00",
    color: "#16812B",
    dest_time: "18:06:00",
  },
  {
    train_id: "1771",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:20:00",
    color: "#16812B",
    dest_time: "17:47:00",
  },
  {
    train_id: "1760",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:28:00",
    color: "#16812B",
    dest_time: "18:47:00",
  },
  {
    train_id: "1773",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:30:00",
    color: "#16812B",
    dest_time: "17:57:00",
  },
  {
    train_id: "1762",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "17:38:00",
    color: "#16812B",
    dest_time: "18:02:00",
  },
  {
    train_id: "1775",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:40:00",
    color: "#16812B",
    dest_time: "18:07:00",
  },
  {
    train_id: "1764",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:48:00",
    color: "#16812B",
    dest_time: "19:07:00",
  },
  {
    train_id: "1777",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:50:00",
    color: "#16812B",
    dest_time: "18:17:00",
  },
  {
    train_id: "1766",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "17:58:00",
    color: "#16812B",
    dest_time: "18:07:00",
  },
  {
    train_id: "1779",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:00:00",
    color: "#16812B",
    dest_time: "18:27:00",
  },
  {
    train_id: "1768",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:08:00",
    color: "#16812B",
    dest_time: "19:27:00",
  },
  {
    train_id: "1770",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "18:18:00",
    color: "#16812B",
    dest_time: "18:42:00",
  },
  {
    train_id: "1783",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:20:00",
    color: "#16812B",
    dest_time: "18:47:00",
  },
  {
    train_id: "1772",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:28:00",
    color: "#16812B",
    dest_time: "19:47:00",
  },
  {
    train_id: "1785",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:30:00",
    color: "#16812B",
    dest_time: "18:57:00",
  },
  {
    train_id: "1774",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:38:00",
    color: "#16812B",
    dest_time: "20:01:00",
  },
  {
    train_id: "1787",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:40:00",
    color: "#16812B",
    dest_time: "19:07:00",
  },
  {
    train_id: "1776",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "18:48:00",
    color: "#16812B",
    dest_time: "19:12:00",
  },
  {
    train_id: "1789",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:50:00",
    color: "#16812B",
    dest_time: "19:17:00",
  },
  {
    train_id: "1778",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:58:00",
    color: "#16812B",
    dest_time: "20:17:00",
  },
  {
    train_id: "1791",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:00:00",
    color: "#16812B",
    dest_time: "19:27:00",
  },
  {
    train_id: "1793",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:10:00",
    color: "#16812B",
    dest_time: "19:37:00",
  },
  {
    train_id: "1780A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:11:00",
    color: "#16812B",
    dest_time: "20:31:00",
  },
  {
    train_id: "1795",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:20:00",
    color: "#16812B",
    dest_time: "19:47:00",
  },
  {
    train_id: "1784A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:26:00",
    color: "#16812B",
    dest_time: "20:49:00",
  },
  {
    train_id: "1797",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:30:00",
    color: "#16812B",
    dest_time: "19:57:00",
  },
  {
    train_id: "1786",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:38:00",
    color: "#16812B",
    dest_time: "21:03:00",
  },
  {
    train_id: "1799",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:40:00",
    color: "#16812B",
    dest_time: "20:07:00",
  },
  {
    train_id: "1788",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "19:48:00",
    color: "#16812B",
    dest_time: "19:57:00",
  },
  {
    train_id: "1801",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:50:00",
    color: "#16812B",
    dest_time: "20:17:00",
  },
  {
    train_id: "1790A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "19:58:00",
    color: "#16812B",
    dest_time: "20:23:00",
  },
  {
    train_id: "1792",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:08:00",
    color: "#16812B",
    dest_time: "21:31:00",
  },
  {
    train_id: "1794",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-SERPONG",
    dest: "SERPONG",
    time_est: "20:18:00",
    color: "#16812B",
    dest_time: "20:27:00",
  },
  {
    train_id: "1805",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:20:00",
    color: "#16812B",
    dest_time: "20:47:00",
  },
  {
    train_id: "1796",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:28:00",
    color: "#16812B",
    dest_time: "21:47:00",
  },
  {
    train_id: "1798",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:38:00",
    color: "#16812B",
    dest_time: "22:01:00",
  },
  {
    train_id: "1809",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:42:00",
    color: "#16812B",
    dest_time: "21:09:00",
  },
  {
    train_id: "1800",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "20:48:00",
    color: "#16812B",
    dest_time: "21:12:00",
  },
  {
    train_id: "1811",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:56:00",
    color: "#16812B",
    dest_time: "21:23:00",
  },
  {
    train_id: "1804",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "21:08:00",
    color: "#16812B",
    dest_time: "22:31:00",
  },
  {
    train_id: "1813",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:10:00",
    color: "#16812B",
    dest_time: "21:37:00",
  },
  {
    train_id: "1815",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:25:00",
    color: "#16812B",
    dest_time: "21:52:00",
  },
  {
    train_id: "1806",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "21:28:00",
    color: "#16812B",
    dest_time: "22:47:00",
  },
  {
    train_id: "1817",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:40:00",
    color: "#16812B",
    dest_time: "22:07:00",
  },
  {
    train_id: "1810",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "21:48:00",
    color: "#16812B",
    dest_time: "23:07:00",
  },
  {
    train_id: "1819",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:55:00",
    color: "#16812B",
    dest_time: "22:22:00",
  },
  {
    train_id: "1812",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "22:03:00",
    color: "#16812B",
    dest_time: "22:27:00",
  },
  {
    train_id: "1821",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "22:11:00",
    color: "#16812B",
    dest_time: "22:38:00",
  },
  {
    train_id: "1814A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "22:15:00",
    color: "#16812B",
    dest_time: "22:40:00",
  },
  {
    train_id: "1816",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "22:28:00",
    color: "#16812B",
    dest_time: "23:48:00",
  },
  {
    train_id: "1825",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "22:39:00",
    color: "#16812B",
    dest_time: "23:06:00",
  },
  {
    train_id: "1818A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "22:43:00",
    color: "#16812B",
    dest_time: "23:08:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: SDM,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
