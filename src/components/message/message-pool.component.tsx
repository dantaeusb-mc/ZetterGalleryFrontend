import styles from './message-pool.module.scss';
import { Message } from '@components/message/index';
import { injectClassNames } from '@/utils/css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MessageLevel,
  MessageProps,
} from '@components/message/message.component';
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group';

interface MessageTransitionProps extends MessageProps {
  id: number;
  nodeRef?: React.RefObject<HTMLDivElement>;
}

const MessagePool = (): JSX.Element => {
  const [id, setId] = useState(0);
  const [messages, setMessages] = useState<MessageTransitionProps[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages((prevMessages) => {
        const level: MessageLevel = ['info', 'success', 'warning', 'error'][
          Math.floor(Math.random() * 4)
        ] as MessageLevel;
        const text =
          'This is a random message ' + Math.floor(Math.random() * 100);

        setId((prevId) => prevId + 1);

        return [
          ...(prevMessages.length >= 3 ? prevMessages.slice(1, 3) : prevMessages),
          {
            id: id,
            level,
            text,
            nodeRef: React.createRef<HTMLDivElement>(),
          },
        ];
      });
    }, 2000 + 5000 * Math.random());

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <section
      className={injectClassNames(styles['message-pool'], 'content-thin')}
    >
      <TransitionGroup>
        {messages.map(({ nodeRef, id, ...message }) => (
          <Transition key={`message-${id}-transition`}  nodeRef={nodeRef} timeout={{
            enter: 700,
            exit: 300,
          }}>
            {(state) => (
              <Message
                key={`message-${id}`}
                ref={nodeRef}
                state={state}
                text={message.text}
                level={message.level}
              />
            )}
          </Transition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default MessagePool;
