import { NextResponse } from "next/server";

const JN = [
  {
    train_id: "558",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "05:41:00",
    color: "#0084D8",
    dest_time: "06:35:00",
  },
  {
    train_id: "551",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "07:30:00",
    color: "#0084D8",
    dest_time: "07:44:00",
  },
  {
    train_id: "552",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:21:00",
    color: "#0084D8",
    dest_time: "10:15:00",
  },
  {
    train_id: "553",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "11:33:00",
    color: "#0084D8",
    dest_time: "11:47:00",
  },
  {
    train_id: "554",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "12:35:00",
    color: "#0084D8",
    dest_time: "13:27:00",
  },
  {
    train_id: "555",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "14:56:00",
    color: "#0084D8",
    dest_time: "15:10:00",
  },
  {
    train_id: "556",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "16:20:00",
    color: "#0084D8",
    dest_time: "17:12:00",
  },
  {
    train_id: "561F",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "17:31:00",
    color: "#0084D8",
    dest_time: "17:45:00",
  },
  {
    train_id: "562F",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "18:42:00",
    color: "#0084D8",
    dest_time: "19:35:00",
  },
  {
    train_id: "557A",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "18:44:00",
    color: "#0084D8",
    dest_time: "18:58:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: JN,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
