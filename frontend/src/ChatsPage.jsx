import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId="21c00ce6-1778-417f-9d49-288174b0e923"
            username= {props.user.username}
            secret= {props.user.secret}
            style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage