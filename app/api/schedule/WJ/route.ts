import { NextResponse } from "next/server";

const WJ = [
  {
    train_id: "558",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "05:51:00",
    color: "#0084D8",
    dest_time: "06:35:00",
  },
  {
    train_id: "551",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "07:20:00",
    color: "#0084D8",
    dest_time: "07:44:00",
  },
  {
    train_id: "552",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:32:00",
    color: "#0084D8",
    dest_time: "10:15:00",
  },
  {
    train_id: "553",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "11:23:00",
    color: "#0084D8",
    dest_time: "11:47:00",
  },
  {
    train_id: "554",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "12:45:00",
    color: "#0084D8",
    dest_time: "13:27:00",
  },
  {
    train_id: "555",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "14:45:00",
    color: "#0084D8",
    dest_time: "15:10:00",
  },
  {
    train_id: "556",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "16:30:00",
    color: "#0084D8",
    dest_time: "17:12:00",
  },
  {
    train_id: "561F",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "17:21:00",
    color: "#0084D8",
    dest_time: "17:45:00",
  },
  {
    train_id: "557A",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "YOGYAKARTA-KUTOARJO",
    dest: "KUTOARJO",
    time_est: "18:34:00",
    color: "#0084D8",
    dest_time: "18:58:00",
  },
  {
    train_id: "562F",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "18:53:00",
    color: "#0084D8",
    dest_time: "19:35:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: WJ,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
