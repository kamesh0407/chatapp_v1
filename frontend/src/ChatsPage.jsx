import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '3a6df9bc-9a9f-425e-8dec-4d78ace2ba94',
        props.user.username,
        props.user.secret
        );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
        )
}

export default ChatsPage;