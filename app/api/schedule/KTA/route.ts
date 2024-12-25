import { NextResponse } from "next/server";

const KTA = [
  {
    train_id: "558",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "05:25:00",
    color: "#0084D8",
    dest_time: "06:35:00",
  },
  {
    train_id: "552",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:05:00",
    color: "#0084D8",
    dest_time: "10:15:00",
  },
  {
    train_id: "554",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "12:20:00",
    color: "#0084D8",
    dest_time: "13:27:00",
  },
  {
    train_id: "556",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "16:05:00",
    color: "#0084D8",
    dest_time: "17:12:00",
  },
  {
    train_id: "562F",
    ka_name: "PRAMBANAN EKSPRES",
    route_name: "KUTOARJO-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "18:27:00",
    color: "#0084D8",
    dest_time: "19:35:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: KTA,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
