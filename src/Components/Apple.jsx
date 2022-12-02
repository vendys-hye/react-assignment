import React from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';

const Wrapper = styled.div`
  min-height: 250px;
`;

const UserBox = styled.div`
  border: 3px solid palevioletred;
  padding: 35px;
`;

const User = [];

const createRandomUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  User.push(createRandomUser());
});

const CronJob = require('cron').CronJob;
new CronJob('00 20 14 2 11 *', function() {
  alert('the time');
}, null, true, 'Asia/Seoul'); 

const Apple = () => {
  return (
    <Wrapper>
      {User.map((el) => {
        return (
          <UserBox key={el.userId}>
            <img src={el.avatar} alt="user avatar" />
            <div>User Id: {el.userId}</div>
            <div>User Name: {el.username}</div>
            <div>User e-mail: {el.email}</div>
            <div>User Password: {el.password}</div>
            <div>User Birth date: {JSON.stringify(el.birthdate)}</div>
            <div>User Registered At: {JSON.stringify(el.registeredAt)}</div>
          </UserBox>
        )
      })}
    </Wrapper>
  )
};

export default Apple;