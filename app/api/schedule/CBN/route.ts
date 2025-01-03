import { NextResponse } from "next/server";

const CBN = [
  {
    train_id: "1500C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "DEPOK-NAMBO",
    dest: "NAMBO",
    time_est: "04:48:00",
    color: "#F76114",
    dest_time: "04:58:00",
  },
  {
    train_id: "1501C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "05:21:00",
    color: "#E30A16",
    dest_time: "06:36:00",
  },
  {
    train_id: "1502C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "DEPOK-NAMBO",
    dest: "NAMBO",
    time_est: "05:44:00",
    color: "#F76114",
    dest_time: "05:54:00",
  },
  {
    train_id: "1503C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "06:20:00",
    color: "#E30A16",
    dest_time: "07:36:00",
  },
  {
    train_id: "1504C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "06:42:00",
    color: "#E30A16",
    dest_time: "06:52:00",
  },
  {
    train_id: "1505C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "07:16:00",
    color: "#E30A16",
    dest_time: "08:30:00",
  },
  {
    train_id: "1506C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "08:06:00",
    color: "#E30A16",
    dest_time: "08:16:00",
  },
  {
    train_id: "1507C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "08:46:00",
    color: "#E30A16",
    dest_time: "10:02:00",
  },
  {
    train_id: "1508C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "10:00:00",
    color: "#E30A16",
    dest_time: "10:10:00",
  },
  {
    train_id: "1509C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "10:32:00",
    color: "#E30A16",
    dest_time: "11:44:00",
  },
  {
    train_id: "1510C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "11:40:00",
    color: "#E30A16",
    dest_time: "11:50:00",
  },
  {
    train_id: "1511C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "12:11:00",
    color: "#E30A16",
    dest_time: "13:24:00",
  },
  {
    train_id: "1512C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "13:13:00",
    color: "#E30A16",
    dest_time: "13:22:00",
  },
  {
    train_id: "1513C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "13:46:00",
    color: "#E30A16",
    dest_time: "14:59:00",
  },
  {
    train_id: "1514C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "14:54:00",
    color: "#E30A16",
    dest_time: "15:04:00",
  },
  {
    train_id: "1515C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "15:27:00",
    color: "#E30A16",
    dest_time: "16:42:00",
  },
  {
    train_id: "1516C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "16:40:00",
    color: "#E30A16",
    dest_time: "16:50:00",
  },
  {
    train_id: "1517C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "17:22:00",
    color: "#E30A16",
    dest_time: "18:35:00",
  },
  {
    train_id: "1518C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "18:20:00",
    color: "#E30A16",
    dest_time: "18:30:00",
  },
  {
    train_id: "1519C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "18:51:00",
    color: "#E30A16",
    dest_time: "20:05:00",
  },
  {
    train_id: "1520C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "19:59:00",
    color: "#E30A16",
    dest_time: "20:07:00",
  },
  {
    train_id: "1521C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "20:41:00",
    color: "#E30A16",
    dest_time: "21:54:00",
  },
  {
    train_id: "1522C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "JAKARTAKOTA-NAMBO",
    dest: "NAMBO",
    time_est: "21:39:00",
    color: "#E30A16",
    dest_time: "21:49:00",
  },
  {
    train_id: "1523C",
    ka_name: "COMMUTER LINE BOGOR",
    route_name: "NAMBO-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "22:15:00",
    color: "#E30A16",
    dest_time: "23:29:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: CBN,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
