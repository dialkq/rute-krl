import { NextResponse } from "next/server";

const CC = [
  {
    train_id: "1826A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "00:03:00",
    color: "#16812B",
    dest_time: "01:05:00",
  },
  {
    train_id: "1830",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "00:25:00",
    color: "#16812B",
    dest_time: "00:32:00",
  },
  {
    train_id: "1617",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:02:00",
    color: "#16812B",
    dest_time: "04:47:00",
  },
  {
    train_id: "1608",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "04:08:00",
    color: "#16812B",
    dest_time: "04:15:00",
  },
  {
    train_id: "1623",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:32:00",
    color: "#16812B",
    dest_time: "05:17:00",
  },
  {
    train_id: "1625",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:42:00",
    color: "#16812B",
    dest_time: "05:27:00",
  },
  {
    train_id: "1627",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "04:52:00",
    color: "#16812B",
    dest_time: "05:37:00",
  },
  {
    train_id: "1629",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:02:00",
    color: "#16812B",
    dest_time: "05:47:00",
  },
  {
    train_id: "1633",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:22:00",
    color: "#16812B",
    dest_time: "06:07:00",
  },
  {
    train_id: "1635",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:32:00",
    color: "#16812B",
    dest_time: "06:17:00",
  },
  {
    train_id: "1616",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "SERPONG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "05:33:00",
    color: "#16812B",
    dest_time: "06:34:00",
  },
  {
    train_id: "1637",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "05:42:00",
    color: "#16812B",
    dest_time: "06:27:00",
  },
  {
    train_id: "1618",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "05:46:00",
    color: "#16812B",
    dest_time: "06:49:00",
  },
  {
    train_id: "1641",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:02:00",
    color: "#16812B",
    dest_time: "06:47:00",
  },
  {
    train_id: "1622A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:05:00",
    color: "#16812B",
    dest_time: "07:07:00",
  },
  {
    train_id: "1643A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:12:00",
    color: "#16812B",
    dest_time: "06:57:00",
  },
  {
    train_id: "1624A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "06:16:00",
    color: "#16812B",
    dest_time: "06:23:00",
  },
  {
    train_id: "1645A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:23:00",
    color: "#16812B",
    dest_time: "07:07:00",
  },
  {
    train_id: "1626",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "06:26:00",
    color: "#16812B",
    dest_time: "06:56:00",
  },
  {
    train_id: "1647",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:32:00",
    color: "#16812B",
    dest_time: "07:17:00",
  },
  {
    train_id: "1628",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:36:00",
    color: "#16812B",
    dest_time: "07:39:00",
  },
  {
    train_id: "1649",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:42:00",
    color: "#16812B",
    dest_time: "07:27:00",
  },
  {
    train_id: "1630",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:46:00",
    color: "#16812B",
    dest_time: "07:53:00",
  },
  {
    train_id: "1651",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "06:52:00",
    color: "#16812B",
    dest_time: "07:37:00",
  },
  {
    train_id: "1634A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:06:00",
    color: "#16812B",
    dest_time: "08:09:00",
  },
  {
    train_id: "1655",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:10:00",
    color: "#16812B",
    dest_time: "07:57:00",
  },
  {
    train_id: "1636B",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:16:00",
    color: "#16812B",
    dest_time: "08:23:00",
  },
  {
    train_id: "1657",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:21:00",
    color: "#16812B",
    dest_time: "08:07:00",
  },
  {
    train_id: "1638",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "07:25:00",
    color: "#16812B",
    dest_time: "07:32:00",
  },
  {
    train_id: "1659",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:32:00",
    color: "#16812B",
    dest_time: "08:17:00",
  },
  {
    train_id: "1640",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:36:00",
    color: "#16812B",
    dest_time: "08:37:00",
  },
  {
    train_id: "1661",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:42:00",
    color: "#16812B",
    dest_time: "08:27:00",
  },
  {
    train_id: "1642",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "07:46:00",
    color: "#16812B",
    dest_time: "08:51:00",
  },
  {
    train_id: "1663",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "07:52:00",
    color: "#16812B",
    dest_time: "08:37:00",
  },
  {
    train_id: "1644",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "07:56:00",
    color: "#16812B",
    dest_time: "08:27:00",
  },
  {
    train_id: "1665",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:02:00",
    color: "#16812B",
    dest_time: "08:47:00",
  },
  {
    train_id: "1646",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:06:00",
    color: "#16812B",
    dest_time: "09:07:00",
  },
  {
    train_id: "1667",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:12:00",
    color: "#16812B",
    dest_time: "08:57:00",
  },
  {
    train_id: "1648A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:18:00",
    color: "#16812B",
    dest_time: "09:22:00",
  },
  {
    train_id: "1671",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:32:00",
    color: "#16812B",
    dest_time: "09:17:00",
  },
  {
    train_id: "1652",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:36:00",
    color: "#16812B",
    dest_time: "09:37:00",
  },
  {
    train_id: "1654",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "08:46:00",
    color: "#16812B",
    dest_time: "09:51:00",
  },
  {
    train_id: "1675",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "08:52:00",
    color: "#16812B",
    dest_time: "09:37:00",
  },
  {
    train_id: "1656",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "08:55:00",
    color: "#16812B",
    dest_time: "09:02:00",
  },
  {
    train_id: "1658",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:06:00",
    color: "#16812B",
    dest_time: "10:07:00",
  },
  {
    train_id: "1679A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:08:00",
    color: "#16812B",
    dest_time: "09:55:00",
  },
  {
    train_id: "1660",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:16:00",
    color: "#16812B",
    dest_time: "10:21:00",
  },
  {
    train_id: "1681A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:18:00",
    color: "#16812B",
    dest_time: "10:05:00",
  },
  {
    train_id: "1662A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "09:26:00",
    color: "#16812B",
    dest_time: "09:33:00",
  },
  {
    train_id: "1683",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:32:00",
    color: "#16812B",
    dest_time: "10:17:00",
  },
  {
    train_id: "1664",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:36:00",
    color: "#16812B",
    dest_time: "10:37:00",
  },
  {
    train_id: "1685",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:42:00",
    color: "#16812B",
    dest_time: "10:27:00",
  },
  {
    train_id: "1666",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:46:00",
    color: "#16812B",
    dest_time: "10:51:00",
  },
  {
    train_id: "1687",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "09:52:00",
    color: "#16812B",
    dest_time: "10:37:00",
  },
  {
    train_id: "1689",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:02:00",
    color: "#16812B",
    dest_time: "10:47:00",
  },
  {
    train_id: "1672",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "10:16:00",
    color: "#16812B",
    dest_time: "11:21:00",
  },
  {
    train_id: "1693",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:22:00",
    color: "#16812B",
    dest_time: "11:07:00",
  },
  {
    train_id: "1695",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:32:00",
    color: "#16812B",
    dest_time: "11:17:00",
  },
  {
    train_id: "1676",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "10:36:00",
    color: "#16812B",
    dest_time: "11:36:00",
  },
  {
    train_id: "1678",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "10:46:00",
    color: "#16812B",
    dest_time: "11:50:00",
  },
  {
    train_id: "1699",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "10:51:00",
    color: "#16812B",
    dest_time: "11:37:00",
  },
  {
    train_id: "1680A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "10:56:00",
    color: "#16812B",
    dest_time: "11:03:00",
  },
  {
    train_id: "1703A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:02:00",
    color: "#16812B",
    dest_time: "11:47:00",
  },
  {
    train_id: "1682",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "11:05:00",
    color: "#16812B",
    dest_time: "11:12:00",
  },
  {
    train_id: "1705",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:22:00",
    color: "#16812B",
    dest_time: "12:07:00",
  },
  {
    train_id: "1686",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:26:00",
    color: "#16812B",
    dest_time: "12:27:00",
  },
  {
    train_id: "1707",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:32:00",
    color: "#16812B",
    dest_time: "12:17:00",
  },
  {
    train_id: "1688",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "11:35:00",
    color: "#16812B",
    dest_time: "11:42:00",
  },
  {
    train_id: "1690",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:46:00",
    color: "#16812B",
    dest_time: "12:47:00",
  },
  {
    train_id: "1711",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "11:52:00",
    color: "#16812B",
    dest_time: "12:37:00",
  },
  {
    train_id: "1713",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:02:00",
    color: "#16812B",
    dest_time: "12:47:00",
  },
  {
    train_id: "1694",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:06:00",
    color: "#16812B",
    dest_time: "13:07:00",
  },
  {
    train_id: "1696",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:16:00",
    color: "#16812B",
    dest_time: "13:21:00",
  },
  {
    train_id: "1717",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:22:00",
    color: "#16812B",
    dest_time: "13:07:00",
  },
  {
    train_id: "1719A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:32:00",
    color: "#16812B",
    dest_time: "13:17:00",
  },
  {
    train_id: "1700",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:36:00",
    color: "#16812B",
    dest_time: "13:37:00",
  },
  {
    train_id: "1704A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "12:46:00",
    color: "#16812B",
    dest_time: "13:54:00",
  },
  {
    train_id: "1723",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "12:52:00",
    color: "#16812B",
    dest_time: "13:37:00",
  },
  {
    train_id: "1725",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:02:00",
    color: "#16812B",
    dest_time: "13:47:00",
  },
  {
    train_id: "1706",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:06:00",
    color: "#16812B",
    dest_time: "14:08:00",
  },
  {
    train_id: "1708",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:16:00",
    color: "#16812B",
    dest_time: "14:22:00",
  },
  {
    train_id: "1727A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:22:00",
    color: "#16812B",
    dest_time: "14:07:00",
  },
  {
    train_id: "1729",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:32:00",
    color: "#16812B",
    dest_time: "14:17:00",
  },
  {
    train_id: "1712",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:36:00",
    color: "#16812B",
    dest_time: "14:37:00",
  },
  {
    train_id: "1714",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "13:46:00",
    color: "#16812B",
    dest_time: "14:51:00",
  },
  {
    train_id: "1733",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "13:55:00",
    color: "#16812B",
    dest_time: "14:40:00",
  },
  {
    train_id: "1718",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:06:00",
    color: "#16812B",
    dest_time: "15:07:00",
  },
  {
    train_id: "1737",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:12:00",
    color: "#16812B",
    dest_time: "14:57:00",
  },
  {
    train_id: "1720",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:16:00",
    color: "#16812B",
    dest_time: "15:21:00",
  },
  {
    train_id: "1741",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:31:00",
    color: "#16812B",
    dest_time: "15:17:00",
  },
  {
    train_id: "1724",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:36:00",
    color: "#16812B",
    dest_time: "15:37:00",
  },
  {
    train_id: "1743",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:42:00",
    color: "#16812B",
    dest_time: "15:27:00",
  },
  {
    train_id: "1726",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:46:00",
    color: "#16812B",
    dest_time: "15:51:00",
  },
  {
    train_id: "1745",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "14:52:00",
    color: "#16812B",
    dest_time: "15:37:00",
  },
  {
    train_id: "1747",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:02:00",
    color: "#16812B",
    dest_time: "15:47:00",
  },
  {
    train_id: "1730",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:06:00",
    color: "#16812B",
    dest_time: "16:07:00",
  },
  {
    train_id: "1749",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:12:00",
    color: "#16812B",
    dest_time: "15:57:00",
  },
  {
    train_id: "1732",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "15:15:00",
    color: "#16812B",
    dest_time: "15:22:00",
  },
  {
    train_id: "1751A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:22:00",
    color: "#16812B",
    dest_time: "16:07:00",
  },
  {
    train_id: "1753",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:32:00",
    color: "#16812B",
    dest_time: "16:17:00",
  },
  {
    train_id: "1734",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:36:00",
    color: "#16812B",
    dest_time: "16:37:00",
  },
  {
    train_id: "1755",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:42:00",
    color: "#16812B",
    dest_time: "16:27:00",
  },
  {
    train_id: "1736",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "15:46:00",
    color: "#16812B",
    dest_time: "16:51:00",
  },
  {
    train_id: "1757",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "15:52:00",
    color: "#16812B",
    dest_time: "16:37:00",
  },
  {
    train_id: "1759",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:02:00",
    color: "#16812B",
    dest_time: "16:47:00",
  },
  {
    train_id: "1740",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "16:05:00",
    color: "#16812B",
    dest_time: "16:12:00",
  },
  {
    train_id: "1742",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:16:00",
    color: "#16812B",
    dest_time: "17:17:00",
  },
  {
    train_id: "1763",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:22:00",
    color: "#16812B",
    dest_time: "17:07:00",
  },
  {
    train_id: "1744",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:26:00",
    color: "#16812B",
    dest_time: "17:31:00",
  },
  {
    train_id: "1765",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:32:00",
    color: "#16812B",
    dest_time: "17:17:00",
  },
  {
    train_id: "1746",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "16:35:00",
    color: "#16812B",
    dest_time: "16:42:00",
  },
  {
    train_id: "1767",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:42:00",
    color: "#16812B",
    dest_time: "17:27:00",
  },
  {
    train_id: "1748",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:46:00",
    color: "#16812B",
    dest_time: "17:47:00",
  },
  {
    train_id: "1769",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "16:52:00",
    color: "#16812B",
    dest_time: "17:37:00",
  },
  {
    train_id: "1750",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "16:56:00",
    color: "#16812B",
    dest_time: "18:01:00",
  },
  {
    train_id: "1771",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:02:00",
    color: "#16812B",
    dest_time: "17:47:00",
  },
  {
    train_id: "1752",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:06:00",
    color: "#16812B",
    dest_time: "18:15:00",
  },
  {
    train_id: "1773",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:12:00",
    color: "#16812B",
    dest_time: "17:57:00",
  },
  {
    train_id: "1754",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "17:15:00",
    color: "#16812B",
    dest_time: "17:22:00",
  },
  {
    train_id: "1775",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:22:00",
    color: "#16812B",
    dest_time: "18:07:00",
  },
  {
    train_id: "1756",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:26:00",
    color: "#16812B",
    dest_time: "18:29:00",
  },
  {
    train_id: "1777",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:32:00",
    color: "#16812B",
    dest_time: "18:17:00",
  },
  {
    train_id: "1758",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-TIGARAKSA",
    dest: "TIGARAKSA",
    time_est: "17:36:00",
    color: "#16812B",
    dest_time: "18:06:00",
  },
  {
    train_id: "1779",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "17:42:00",
    color: "#16812B",
    dest_time: "18:27:00",
  },
  {
    train_id: "1760",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:46:00",
    color: "#16812B",
    dest_time: "18:47:00",
  },
  {
    train_id: "1762",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "17:55:00",
    color: "#16812B",
    dest_time: "18:02:00",
  },
  {
    train_id: "1783",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:02:00",
    color: "#16812B",
    dest_time: "18:47:00",
  },
  {
    train_id: "1764",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:06:00",
    color: "#16812B",
    dest_time: "19:07:00",
  },
  {
    train_id: "1787",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:22:00",
    color: "#16812B",
    dest_time: "19:07:00",
  },
  {
    train_id: "1768",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:26:00",
    color: "#16812B",
    dest_time: "19:27:00",
  },
  {
    train_id: "1789",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:32:00",
    color: "#16812B",
    dest_time: "19:17:00",
  },
  {
    train_id: "1770",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "18:35:00",
    color: "#16812B",
    dest_time: "18:42:00",
  },
  {
    train_id: "1791",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:42:00",
    color: "#16812B",
    dest_time: "19:27:00",
  },
  {
    train_id: "1772",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:46:00",
    color: "#16812B",
    dest_time: "19:47:00",
  },
  {
    train_id: "1793",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TIGARAKSA-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "18:52:00",
    color: "#16812B",
    dest_time: "19:37:00",
  },
  {
    train_id: "1774",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "18:56:00",
    color: "#16812B",
    dest_time: "20:01:00",
  },
  {
    train_id: "1795",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:02:00",
    color: "#16812B",
    dest_time: "19:47:00",
  },
  {
    train_id: "1776",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "19:05:00",
    color: "#16812B",
    dest_time: "19:12:00",
  },
  {
    train_id: "1797",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:12:00",
    color: "#16812B",
    dest_time: "19:57:00",
  },
  {
    train_id: "1778",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:16:00",
    color: "#16812B",
    dest_time: "20:17:00",
  },
  {
    train_id: "1799",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:22:00",
    color: "#16812B",
    dest_time: "20:07:00",
  },
  {
    train_id: "1780A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:29:00",
    color: "#16812B",
    dest_time: "20:31:00",
  },
  {
    train_id: "1801",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "19:32:00",
    color: "#16812B",
    dest_time: "20:17:00",
  },
  {
    train_id: "1803A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-SERPONG",
    dest: "SERPONG",
    time_est: "19:42:00",
    color: "#16812B",
    dest_time: "19:49:00",
  },
  {
    train_id: "1784A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:44:00",
    color: "#16812B",
    dest_time: "20:49:00",
  },
  {
    train_id: "1786",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "19:56:00",
    color: "#16812B",
    dest_time: "21:03:00",
  },
  {
    train_id: "1790A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "20:16:00",
    color: "#16812B",
    dest_time: "20:23:00",
  },
  {
    train_id: "1809",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:24:00",
    color: "#16812B",
    dest_time: "21:09:00",
  },
  {
    train_id: "1792",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:26:00",
    color: "#16812B",
    dest_time: "21:31:00",
  },
  {
    train_id: "1811",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:38:00",
    color: "#16812B",
    dest_time: "21:23:00",
  },
  {
    train_id: "1796",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:46:00",
    color: "#16812B",
    dest_time: "21:47:00",
  },
  {
    train_id: "1813",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "20:52:00",
    color: "#16812B",
    dest_time: "21:37:00",
  },
  {
    train_id: "1798",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:56:00",
    color: "#16812B",
    dest_time: "22:01:00",
  },
  {
    train_id: "1800",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "21:05:00",
    color: "#16812B",
    dest_time: "21:12:00",
  },
  {
    train_id: "1815",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:07:00",
    color: "#16812B",
    dest_time: "21:52:00",
  },
  {
    train_id: "1817",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:22:00",
    color: "#16812B",
    dest_time: "22:07:00",
  },
  {
    train_id: "1804",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "21:26:00",
    color: "#16812B",
    dest_time: "22:31:00",
  },
  {
    train_id: "1819",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:37:00",
    color: "#16812B",
    dest_time: "22:22:00",
  },
  {
    train_id: "1806",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "21:46:00",
    color: "#16812B",
    dest_time: "22:47:00",
  },
  {
    train_id: "1821",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "21:53:00",
    color: "#16812B",
    dest_time: "22:38:00",
  },
  {
    train_id: "1810",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "22:06:00",
    color: "#16812B",
    dest_time: "23:07:00",
  },
  {
    train_id: "1823",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-SERPONG",
    dest: "SERPONG",
    time_est: "22:07:00",
    color: "#16812B",
    dest_time: "22:15:00",
  },
  {
    train_id: "1812",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "22:20:00",
    color: "#16812B",
    dest_time: "22:27:00",
  },
  {
    train_id: "1825",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "RANGKASBITUNG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "22:21:00",
    color: "#16812B",
    dest_time: "23:06:00",
  },
  {
    train_id: "1814A",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-PARUNGPANJANG",
    dest: "PARUNGPANJANG",
    time_est: "22:33:00",
    color: "#16812B",
    dest_time: "22:40:00",
  },
  {
    train_id: "1816",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "TANAHABANG-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "22:46:00",
    color: "#16812B",
    dest_time: "23:48:00",
  },
  {
    train_id: "1829",
    ka_name: "COMMUTER LINE RANGKASBITUNG",
    route_name: "PARUNGPANJANG-TANAHABANG",
    dest: "TANAHABANG",
    time_est: "22:48:00",
    color: "#16812B",
    dest_time: "23:33:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: CC,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
