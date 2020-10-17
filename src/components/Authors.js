import React from "react";
import { Avatar, List } from "antd";
import cantarinoImg from "../img/authors/cantarino.jpeg";
import gabrielImg from "../img/authors/gabriel.jpeg";
import rubioImg from "../img/authors/rubio.jpeg";

const authorList = [
  {
    name: "Christian Cantarino",
    email: "christian.cantarino@gmail.com",
    avatar: cantarinoImg,
  },
  { name: "Gabriel Dutra", email: "me@gdutra.dev", avatar: gabrielImg },
  { name: "Rubio Torres", email: "rubiotorres@cefetmg.br", avatar: rubioImg },
];

export default function Authors() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={authorList}
      renderItem={(author) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={author.avatar} />}
            title={author.name}
            description={author.email}
          />
        </List.Item>
      )}
    />
  );
}
