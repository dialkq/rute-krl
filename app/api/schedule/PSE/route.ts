import { NextResponse } from "next/server";

const PSE = [
  {
    train_id: "4111",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "00:09:00",
    color: "#0084D8",
    dest_time: "00:27:00",
  },
  {
    train_id: "4000",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-CIKARANG",
    dest: "CIKARANG",
    time_est: "04:38:00",
    color: "#0084D8",
    dest_time: "05:32:00",
  },
  {
    train_id: "4005",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "05:05:00",
    color: "#0084D8",
    dest_time: "05:16:00",
  },
  {
    train_id: "4002",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-CIKARANG",
    dest: "CIKARANG",
    time_est: "05:21:00",
    color: "#0084D8",
    dest_time: "06:15:00",
  },
  {
    train_id: "4007",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "05:34:00",
    color: "#0084D8",
    dest_time: "05:45:00",
  },
  {
    train_id: "4004",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-BEKASI",
    dest: "BEKASI",
    time_est: "05:40:00",
    color: "#0084D8",
    dest_time: "06:13:00",
  },
  {
    train_id: "4009",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "06:03:00",
    color: "#0084D8",
    dest_time: "06:14:00",
  },
  {
    train_id: "4011",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "06:34:00",
    color: "#0084D8",
    dest_time: "06:45:00",
  },
  {
    train_id: "4013",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:04:00",
    color: "#0084D8",
    dest_time: "07:15:00",
  },
  {
    train_id: "4015",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:15:00",
    color: "#0084D8",
    dest_time: "07:26:00",
  },
  {
    train_id: "4017A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:38:00",
    color: "#0084D8",
    dest_time: "07:48:00",
  },
  {
    train_id: "4019",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "TAMBUN-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:01:00",
    color: "#0084D8",
    dest_time: "08:11:00",
  },
  {
    train_id: "4021",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:11:00",
    color: "#0084D8",
    dest_time: "08:22:00",
  },
  {
    train_id: "4023A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:34:00",
    color: "#0084D8",
    dest_time: "08:44:00",
  },
  {
    train_id: "4025A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:41:00",
    color: "#0084D8",
    dest_time: "08:52:00",
  },
  {
    train_id: "4027",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "09:13:00",
    color: "#0084D8",
    dest_time: "09:24:00",
  },
  {
    train_id: "4029",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "09:37:00",
    color: "#0084D8",
    dest_time: "09:48:00",
  },
  {
    train_id: "4031",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:07:00",
    color: "#0084D8",
    dest_time: "10:18:00",
  },
  {
    train_id: "4033",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:28:00",
    color: "#0084D8",
    dest_time: "10:39:00",
  },
  {
    train_id: "4035",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:39:00",
    color: "#0084D8",
    dest_time: "10:50:00",
  },
  {
    train_id: "4037",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "11:01:00",
    color: "#0084D8",
    dest_time: "11:12:00",
  },
  {
    train_id: "4039",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "11:31:00",
    color: "#0084D8",
    dest_time: "11:42:00",
  },
  {
    train_id: "4041",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "11:57:00",
    color: "#0084D8",
    dest_time: "12:08:00",
  },
  {
    train_id: "4045",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "12:29:00",
    color: "#0084D8",
    dest_time: "12:40:00",
  },
  {
    train_id: "4047",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "12:44:00",
    color: "#0084D8",
    dest_time: "12:55:00",
  },
  {
    train_id: "4051",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "13:19:00",
    color: "#0084D8",
    dest_time: "13:30:00",
  },
  {
    train_id: "4055",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "13:48:00",
    color: "#0084D8",
    dest_time: "13:59:00",
  },
  {
    train_id: "4057",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "14:06:00",
    color: "#0084D8",
    dest_time: "14:18:00",
  },
  {
    train_id: "4059",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "14:44:00",
    color: "#0084D8",
    dest_time: "14:55:00",
  },
  {
    train_id: "4061A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:08:00",
    color: "#0084D8",
    dest_time: "15:19:00",
  },
  {
    train_id: "4063",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:27:00",
    color: "#0084D8",
    dest_time: "15:38:00",
  },
  {
    train_id: "4065",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:49:00",
    color: "#0084D8",
    dest_time: "16:00:00",
  },
  {
    train_id: "4067",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:04:00",
    color: "#0084D8",
    dest_time: "16:15:00",
  },
  {
    train_id: "4069",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:27:00",
    color: "#0084D8",
    dest_time: "16:38:00",
  },
  {
    train_id: "4071",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:40:00",
    color: "#0084D8",
    dest_time: "16:51:00",
  },
  {
    train_id: "4073",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:49:00",
    color: "#0084D8",
    dest_time: "17:00:00",
  },
  {
    train_id: "4075",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "17:07:00",
    color: "#0084D8",
    dest_time: "17:18:00",
  },
  {
    train_id: "4077",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "17:36:00",
    color: "#0084D8",
    dest_time: "17:47:00",
  },
  {
    train_id: "4079A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:07:00",
    color: "#0084D8",
    dest_time: "18:19:00",
  },
  {
    train_id: "4081",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:20:00",
    color: "#0084D8",
    dest_time: "18:30:00",
  },
  {
    train_id: "4083",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:30:00",
    color: "#0084D8",
    dest_time: "18:40:00",
  },
  {
    train_id: "4085",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:43:00",
    color: "#0084D8",
    dest_time: "18:54:00",
  },
  {
    train_id: "4087",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:06:00",
    color: "#0084D8",
    dest_time: "19:17:00",
  },
  {
    train_id: "4089",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:33:00",
    color: "#0084D8",
    dest_time: "19:44:00",
  },
  {
    train_id: "4091",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:40:00",
    color: "#0084D8",
    dest_time: "19:51:00",
  },
  {
    train_id: "4093",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:00:00",
    color: "#0084D8",
    dest_time: "20:11:00",
  },
  {
    train_id: "4095",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:28:00",
    color: "#0084D8",
    dest_time: "20:39:00",
  },
  {
    train_id: "4097",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:41:00",
    color: "#0084D8",
    dest_time: "20:52:00",
  },
  {
    train_id: "4099",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:56:00",
    color: "#0084D8",
    dest_time: "21:08:00",
  },
  {
    train_id: "4101",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "21:21:00",
    color: "#0084D8",
    dest_time: "21:38:00",
  },
  {
    train_id: "4103",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "21:50:00",
    color: "#0084D8",
    dest_time: "22:00:00",
  },
  {
    train_id: "4105",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "22:18:00",
    color: "#0084D8",
    dest_time: "22:29:00",
  },
  {
    train_id: "4107",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "22:37:00",
    color: "#0084D8",
    dest_time: "22:48:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: PSE,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
