import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Giovanne Faccio Tarcitano" />

      <Role>Bot - 1</Role>
      <UserRow nickname="SentryAlert" isBot />

      <Role>Indisponível - 15 </Role>

      {Array.from(Array(15).keys()).map((n) => (
          <UserRow nickname="Fulano" />
        ))}
    </Container>
  )
};

export default UserList;