import { NextResponse } from "next/server";

const GST = [
  {
    train_id: "4111",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "00:02:00",
    color: "#0084D8",
    dest_time: "00:27:00",
  },
  {
    train_id: "4000",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-CIKARANG",
    dest: "CIKARANG",
    time_est: "04:40:00",
    color: "#0084D8",
    dest_time: "05:32:00",
  },
  {
    train_id: "4005",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "04:58:00",
    color: "#0084D8",
    dest_time: "05:16:00",
  },
  {
    train_id: "4002",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-CIKARANG",
    dest: "CIKARANG",
    time_est: "05:23:00",
    color: "#0084D8",
    dest_time: "06:15:00",
  },
  {
    train_id: "4007",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "05:26:00",
    color: "#0084D8",
    dest_time: "05:45:00",
  },
  {
    train_id: "4004",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "JAKARTAKOTA-BEKASI",
    dest: "BEKASI",
    time_est: "05:42:00",
    color: "#0084D8",
    dest_time: "06:13:00",
  },
  {
    train_id: "4009",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "05:56:00",
    color: "#0084D8",
    dest_time: "06:14:00",
  },
  {
    train_id: "5502",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "05:58:00",
    color: "#0084D8",
    dest_time: "06:54:00",
  },
  {
    train_id: "5504",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "06:21:00",
    color: "#0084D8",
    dest_time: "06:55:00",
  },
  {
    train_id: "4011",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "06:27:00",
    color: "#0084D8",
    dest_time: "06:45:00",
  },
  {
    train_id: "5506",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "06:51:00",
    color: "#0084D8",
    dest_time: "07:24:00",
  },
  {
    train_id: "4013",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "06:57:00",
    color: "#0084D8",
    dest_time: "07:15:00",
  },
  {
    train_id: "5508",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "07:07:00",
    color: "#0084D8",
    dest_time: "08:00:00",
  },
  {
    train_id: "4015",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:08:00",
    color: "#0084D8",
    dest_time: "07:26:00",
  },
  {
    train_id: "4017A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:30:00",
    color: "#0084D8",
    dest_time: "07:48:00",
  },
  {
    train_id: "5510",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "07:31:00",
    color: "#0084D8",
    dest_time: "08:23:00",
  },
  {
    train_id: "5512",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "07:52:00",
    color: "#0084D8",
    dest_time: "08:26:00",
  },
  {
    train_id: "4019",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "TAMBUN-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "07:55:00",
    color: "#0084D8",
    dest_time: "08:11:00",
  },
  {
    train_id: "5514",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "08:04:00",
    color: "#0084D8",
    dest_time: "08:36:00",
  },
  {
    train_id: "4021",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:05:00",
    color: "#0084D8",
    dest_time: "08:22:00",
  },
  {
    train_id: "5516",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "08:13:00",
    color: "#0084D8",
    dest_time: "09:05:00",
  },
  {
    train_id: "4023A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:28:00",
    color: "#0084D8",
    dest_time: "08:44:00",
  },
  {
    train_id: "4025A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "08:34:00",
    color: "#0084D8",
    dest_time: "08:52:00",
  },
  {
    train_id: "5520",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "08:36:00",
    color: "#0084D8",
    dest_time: "09:33:00",
  },
  {
    train_id: "5522",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "08:45:00",
    color: "#0084D8",
    dest_time: "09:38:00",
  },
  {
    train_id: "5524",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "08:57:00",
    color: "#0084D8",
    dest_time: "09:49:00",
  },
  {
    train_id: "4027",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "09:06:00",
    color: "#0084D8",
    dest_time: "09:24:00",
  },
  {
    train_id: "5526",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "09:14:00",
    color: "#0084D8",
    dest_time: "09:48:00",
  },
  {
    train_id: "4029",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "09:30:00",
    color: "#0084D8",
    dest_time: "09:48:00",
  },
  {
    train_id: "5528",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "09:31:00",
    color: "#0084D8",
    dest_time: "10:08:00",
  },
  {
    train_id: "5530",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "09:51:00",
    color: "#0084D8",
    dest_time: "10:22:00",
  },
  {
    train_id: "4031",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "09:59:00",
    color: "#0084D8",
    dest_time: "10:18:00",
  },
  {
    train_id: "5532",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "10:05:00",
    color: "#0084D8",
    dest_time: "11:04:00",
  },
  {
    train_id: "4033",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:21:00",
    color: "#0084D8",
    dest_time: "10:39:00",
  },
  {
    train_id: "4035",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:30:00",
    color: "#0084D8",
    dest_time: "10:50:00",
  },
  {
    train_id: "5536",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "10:41:00",
    color: "#0084D8",
    dest_time: "11:12:00",
  },
  {
    train_id: "4037",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "10:54:00",
    color: "#0084D8",
    dest_time: "11:12:00",
  },
  {
    train_id: "5538",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "11:06:00",
    color: "#0084D8",
    dest_time: "12:00:00",
  },
  {
    train_id: "4039",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "11:25:00",
    color: "#0084D8",
    dest_time: "11:42:00",
  },
  {
    train_id: "5540",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "11:38:00",
    color: "#0084D8",
    dest_time: "12:30:00",
  },
  {
    train_id: "4041",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "11:50:00",
    color: "#0084D8",
    dest_time: "12:08:00",
  },
  {
    train_id: "5542",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "11:56:00",
    color: "#0084D8",
    dest_time: "12:48:00",
  },
  {
    train_id: "4045",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "12:23:00",
    color: "#0084D8",
    dest_time: "12:40:00",
  },
  {
    train_id: "5544",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "12:36:00",
    color: "#0084D8",
    dest_time: "13:29:00",
  },
  {
    train_id: "4047",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "12:37:00",
    color: "#0084D8",
    dest_time: "12:55:00",
  },
  {
    train_id: "5546",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "13:00:00",
    color: "#0084D8",
    dest_time: "13:31:00",
  },
  {
    train_id: "4051",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "13:13:00",
    color: "#0084D8",
    dest_time: "13:30:00",
  },
  {
    train_id: "5548",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "13:36:00",
    color: "#0084D8",
    dest_time: "14:08:00",
  },
  {
    train_id: "4055",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "13:41:00",
    color: "#0084D8",
    dest_time: "13:59:00",
  },
  {
    train_id: "5550A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "13:58:00",
    color: "#0084D8",
    dest_time: "14:31:00",
  },
  {
    train_id: "4057",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "13:59:00",
    color: "#0084D8",
    dest_time: "14:18:00",
  },
  {
    train_id: "5552",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "14:16:00",
    color: "#0084D8",
    dest_time: "14:47:00",
  },
  {
    train_id: "4059",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "14:37:00",
    color: "#0084D8",
    dest_time: "14:55:00",
  },
  {
    train_id: "5554",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "14:46:00",
    color: "#0084D8",
    dest_time: "15:18:00",
  },
  {
    train_id: "5556",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "14:58:00",
    color: "#0084D8",
    dest_time: "15:29:00",
  },
  {
    train_id: "4061A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:01:00",
    color: "#0084D8",
    dest_time: "15:19:00",
  },
  {
    train_id: "4063",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:19:00",
    color: "#0084D8",
    dest_time: "15:38:00",
  },
  {
    train_id: "4065",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:43:00",
    color: "#0084D8",
    dest_time: "16:00:00",
  },
  {
    train_id: "5560",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "15:44:00",
    color: "#0084D8",
    dest_time: "16:39:00",
  },
  {
    train_id: "4067",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "15:57:00",
    color: "#0084D8",
    dest_time: "16:15:00",
  },
  {
    train_id: "5562",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "16:02:00",
    color: "#0084D8",
    dest_time: "16:34:00",
  },
  {
    train_id: "5564",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "16:15:00",
    color: "#0084D8",
    dest_time: "17:11:00",
  },
  {
    train_id: "4069",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:20:00",
    color: "#0084D8",
    dest_time: "16:38:00",
  },
  {
    train_id: "4071",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:33:00",
    color: "#0084D8",
    dest_time: "16:51:00",
  },
  {
    train_id: "5566",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "16:41:00",
    color: "#0084D8",
    dest_time: "17:41:00",
  },
  {
    train_id: "4073",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "16:42:00",
    color: "#0084D8",
    dest_time: "17:00:00",
  },
  {
    train_id: "4075",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "17:00:00",
    color: "#0084D8",
    dest_time: "17:18:00",
  },
  {
    train_id: "5568",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "17:00:00",
    color: "#0084D8",
    dest_time: "17:35:00",
  },
  {
    train_id: "5570",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "17:23:00",
    color: "#0084D8",
    dest_time: "18:21:00",
  },
  {
    train_id: "4077",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "17:29:00",
    color: "#0084D8",
    dest_time: "17:47:00",
  },
  {
    train_id: "5572",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "17:36:00",
    color: "#0084D8",
    dest_time: "18:32:00",
  },
  {
    train_id: "4079A",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "17:59:00",
    color: "#0084D8",
    dest_time: "18:19:00",
  },
  {
    train_id: "5574",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "18:07:00",
    color: "#0084D8",
    dest_time: "19:04:00",
  },
  {
    train_id: "4081",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:14:00",
    color: "#0084D8",
    dest_time: "18:30:00",
  },
  {
    train_id: "4083",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:24:00",
    color: "#0084D8",
    dest_time: "18:40:00",
  },
  {
    train_id: "5576",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "18:31:00",
    color: "#0084D8",
    dest_time: "19:34:00",
  },
  {
    train_id: "4085",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:36:00",
    color: "#0084D8",
    dest_time: "18:54:00",
  },
  {
    train_id: "5578",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "18:58:00",
    color: "#0084D8",
    dest_time: "19:29:00",
  },
  {
    train_id: "4087",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "18:59:00",
    color: "#0084D8",
    dest_time: "19:17:00",
  },
  {
    train_id: "4089",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:26:00",
    color: "#0084D8",
    dest_time: "19:44:00",
  },
  {
    train_id: "5582",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "19:30:00",
    color: "#0084D8",
    dest_time: "20:29:00",
  },
  {
    train_id: "4091",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:33:00",
    color: "#0084D8",
    dest_time: "19:51:00",
  },
  {
    train_id: "4093",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "19:53:00",
    color: "#0084D8",
    dest_time: "20:11:00",
  },
  {
    train_id: "5584",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "19:53:00",
    color: "#0084D8",
    dest_time: "20:24:00",
  },
  {
    train_id: "5586",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "20:15:00",
    color: "#0084D8",
    dest_time: "21:10:00",
  },
  {
    train_id: "4095",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:21:00",
    color: "#0084D8",
    dest_time: "20:39:00",
  },
  {
    train_id: "4097",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:34:00",
    color: "#0084D8",
    dest_time: "20:52:00",
  },
  {
    train_id: "4099",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "20:47:00",
    color: "#0084D8",
    dest_time: "21:08:00",
  },
  {
    train_id: "5588",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "21:01:00",
    color: "#0084D8",
    dest_time: "21:33:00",
  },
  {
    train_id: "5590",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "21:13:00",
    color: "#0084D8",
    dest_time: "21:46:00",
  },
  {
    train_id: "4101",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "21:14:00",
    color: "#0084D8",
    dest_time: "21:38:00",
  },
  {
    train_id: "5592",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "21:31:00",
    color: "#0084D8",
    dest_time: "22:07:00",
  },
  {
    train_id: "4103",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "21:44:00",
    color: "#0084D8",
    dest_time: "22:00:00",
  },
  {
    train_id: "5594",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "21:59:00",
    color: "#0084D8",
    dest_time: "23:00:00",
  },
  {
    train_id: "4105",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "22:10:00",
    color: "#0084D8",
    dest_time: "22:29:00",
  },
  {
    train_id: "5596",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-BEKASI",
    dest: "BEKASI",
    time_est: "22:21:00",
    color: "#0084D8",
    dest_time: "22:52:00",
  },
  {
    train_id: "4107",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "CIKARANG-KAMPUNGBANDAN",
    dest: "KAMPUNGBANDAN",
    time_est: "22:30:00",
    color: "#0084D8",
    dest_time: "22:48:00",
  },
  {
    train_id: "5598",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "KAMPUNGBANDAN-CIKARANG",
    dest: "CIKARANG",
    time_est: "22:51:00",
    color: "#0084D8",
    dest_time: "23:47:00",
  },
  {
    train_id: "4109",
    ka_name: "COMMUTER LINE CIKARANG",
    route_name: "BEKASI-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "22:55:00",
    color: "#0084D8",
    dest_time: "23:19:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: GST,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}