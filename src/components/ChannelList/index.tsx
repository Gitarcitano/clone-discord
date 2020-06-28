import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="geral"/>
      <ChannelButton channelName="developers"/>
      <ChannelButton channelName="critical-alerts"/>
      <ChannelButton channelName="tech-ott"/>
      <ChannelButton channelName="tech-offtopic"/>
    </Container>
  )
};

export default ChannelList;