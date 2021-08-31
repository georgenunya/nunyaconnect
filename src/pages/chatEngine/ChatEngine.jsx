import { ChatEngine, ChatSettings } from 'react-chat-engine';
import LoginForm from '../../components/LoginForm';
import './chatengine.css'
import Topbar from '../../components/topbar/Topbar';

const projectID = 'd1185f1e-270b-4795-a596-753e2dd8426e';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
      <>
      <Topbar/>
    <ChatEngine
      height="calc(100vh - 50px)"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderIceBreaker={(chat) => {}}
      renderChatSettings={(chatAppState) => {
          return (
            <ChatSettings />
          )
      }}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </>
  );
};

// infinite scroll, logout, more customizations...


export default Chat;