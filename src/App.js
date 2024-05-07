import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
        
         height ="100vh"
         projectID = "9ea7fdcf-af2d-44da-b617-024a781a1b00"
         userName = "Chris"
         userSecret = "123123"
         renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
