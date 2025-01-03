import { NextResponse } from "next/server";

const CT = [
  {
    train_id: "308",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "05:24:00",
    color: "#16812B",
    dest_time: "06:55:00",
  },
  {
    train_id: "301",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "06:43:00",
    color: "#16812B",
    dest_time: "07:00:00",
  },
  {
    train_id: "302",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "07:54:00",
    color: "#16812B",
    dest_time: "09:20:00",
  },
  {
    train_id: "309",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "09:01:00",
    color: "#16812B",
    dest_time: "09:18:00",
  },
  {
    train_id: "310",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "10:14:00",
    color: "#16812B",
    dest_time: "11:40:00",
  },
  {
    train_id: "303",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "11:22:00",
    color: "#16812B",
    dest_time: "11:40:00",
  },
  {
    train_id: "311",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "14:08:00",
    color: "#16812B",
    dest_time: "14:26:00",
  },
  {
    train_id: "304",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "14:09:00",
    color: "#16812B",
    dest_time: "15:35:00",
  },
  {
    train_id: "312",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "17:04:00",
    color: "#16812B",
    dest_time: "18:30:00",
  },
  {
    train_id: "305",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "17:49:00",
    color: "#16812B",
    dest_time: "18:06:00",
  },
  {
    train_id: "306",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "RANGKASBITUNG-MERAK",
    dest: "MERAK",
    time_est: "19:14:00",
    color: "#16812B",
    dest_time: "20:45:00",
  },
  {
    train_id: "313",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "20:28:00",
    color: "#16812B",
    dest_time: "20:45:00",
  },
  {
    train_id: "307A",
    ka_name: "COMMUTER LINE MERAK",
    route_name: "MERAK-RANGKASBITUNG",
    dest: "RANGKASBITUNG",
    time_est: "22:54:00",
    color: "#16812B",
    dest_time: "23:11:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: CT,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
