import { Chip, Switch } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table } from ".";

import { OsIcon } from "../OsIcon";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const totalPages = 1;
const rows: { [key: string]: any }[] = [
  {
    ipAddress: "10.10.0.2",
    osType: "TP_WINDOW",
    port: 5567,
    userName: "win",
    opsMode: "DEV",
    collectYn: "Y",
    status: "0",
    updateAt: "2022-10-20 18:00:01",
  },
  {
    ipAddress: "10.10.0.21",
    osType: "TP_WINDOW",
    port: 5567,
    userName: "win",
    opsMode: "DEV",
    collectYn: "Y",
    status: "0",
    updateAt: "2022-10-20 18:00:05",
  },
  {
    ipAddress: "13.125.118.242",
    osType: "TP_LINUX",
    port: 22,
    userName: "suse",
    opsMode: "prod",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 18:00:08",
  },
  {
    ipAddress: "15.164.141.100",
    osType: "TP_LINUX",
    port: 22,
    userName: "centos",
    opsMode: "qa",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 18:00:04",
  },
  {
    ipAddress: "172.10.31.112",
    osType: "TP_UNIX",
    port: 22,
    userName: "unix",
    opsMode: "DEV",
    collectYn: "N",
    status: "0",
    updateAt: "2022-10-05 15:50:09",
  },
  {
    ipAddress: "3.35.64.199",
    osType: "TP_LINUX",
    port: 22,
    userName: "debian",
    opsMode: "prod",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 18:00:03",
  },
  {
    ipAddress: "3.37.3.183",
    osType: "TP_LINUX",
    port: 22,
    userName: "ubuntu",
    opsMode: "dev",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 18:00:05",
  },
  {
    ipAddress: "43.200.203.34",
    osType: "TP_LINUX",
    port: 22,
    userName: "centos",
    opsMode: "DEV",
    collectYn: "Y",
    status: "0",
    updateAt: "2022-10-20 17:59:57",
  },
  {
    ipAddress: "43.200.225.11",
    osType: "TP_LINUX",
    port: 22,
    userName: "mad",
    opsMode: "prod",
    collectYn: "Y",
    status: "0",
    updateAt: "2022-10-20 18:00:05",
  },
  {
    ipAddress: "43.200.225.116",
    osType: "TP_LINUX",
    port: 22,
    userName: "redhat",
    opsMode: "prod",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 17:59:59",
  },
  {
    ipAddress: "43.200.225.12",
    osType: "TP_LINUX",
    port: 22,
    userName: "mad2",
    opsMode: "prod",
    collectYn: "Y",
    status: "0",
    updateAt: "2022-10-20 17:59:57",
  },
  {
    ipAddress: "52.78.109.13",
    osType: "TP_LINUX",
    port: 22,
    userName: "oracle",
    opsMode: "DEV",
    collectYn: "Y",
    status: "1",
    updateAt: "2022-10-20 17:59:49",
  },
].map((row) => ({ ...row, id: `${row.ipAddress}:${row.port}` }));
const columns = [
  {
    field: "osType",
    headerName: "OS Type",
    renderCell: (value: string) => <OsIcon imgName={value} />,
  },
  {
    field: "ipAddress",
    headerName: "IP 주소",
  },
  {
    field: "port",
    headerName: "Port",
  },
  {
    field: "userName",
    headerName: "Username",
  },
  {
    field: "opsMode",
    headerName: "OPS Mode",
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (value: string) => (
      <Chip
        label={value === "0" ? "failed" : "success"}
        color={value === "0" ? "error" : "success"}
        sx={{ width: "150px" }}
        size="small"
      />
    ),
  },
  {
    field: "collectYn",
    headerName: "Collect Y/N",
    renderCell: (value: string) => (
      <Switch defaultChecked={value === "Y"} size="small" />
    ),
  },
  {
    field: "updateAt",
    headerName: "Update At",
  },
];

export const Template: ComponentStory<typeof Table> = () => {
  return (
    <Table
      rows={rows}
      columns={columns}
      totalPages={totalPages}
      onPageChange={() => {}}
      width="600px"
      height="500px"
    />
  );
};
