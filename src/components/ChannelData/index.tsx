import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(1).keys()).map((n) => (
          <ChannelMessage
          author="Giovanne Faccio Tarcitano"
          date="18/07/2020"
          content="Galera, bugou foi tudo!"
        />
        ))}        

        <ChannelMessage
          author="SentryAlert"
          date="18/07/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>@Giovanne Faccio Tarcitano</Mention>, um novo alerta foi disparado no seu último deploy!
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #developers"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;