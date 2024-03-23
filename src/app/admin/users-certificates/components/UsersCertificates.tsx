"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "antd";
import { parseCookies } from "nookies";
import { getUsersCertificate } from "../services/getUsersCertificates";
import { exportToExcel } from "../../users/[id]/components/exportToExcel";
import { SearchOutlined } from "@ant-design/icons";

interface UserData {
  user_name: string;
  surname: string;
  course_name: string;
  code: string;
  time: string;
}

const columns = [
  {
    title: "სახელი",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "გვარი",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "კურსის სახელი",
    dataIndex: "course_name",
    key: "course_name",
  },
  {
    title: "კოდი",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "დრო",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "ჩამოტვირთვა",
    dataIndex: "",
    key: "download",
    render: (record: UserData[]) => <Button onClick={() => exportToExcel(record)}>ჩამოტვირთვა</Button>,
  },
];

const UsersCertificates = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [dataSource, setDataSource] = useState<UserData[]>([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const data = await getUsersCertificate(token);
        setDataSource(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, [token]);

  const filteredDataSource = dataSource.filter(
    (item) =>
      item.user_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchText.toLowerCase()) ||
      item.course_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.code.toLowerCase().includes(searchText.toLowerCase()) ||
      item.time.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Input placeholder="ძებნა" value={searchText} onChange={handleSearch} style={{ width: 200, marginBottom: 10 }} prefix={<SearchOutlined />} />
      <Table dataSource={filteredDataSource} columns={columns} />
    </div>
  );
};

export default UsersCertificates;
