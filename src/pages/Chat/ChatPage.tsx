import React, {useEffect, useState} from 'react';
import {Message} from "./Message";


export type  WebSocketResponseType = {
    message: string
    photo: string
    userId: number
    userName: string
}


export const ChatPage = React.memo(() => {
    return (
        <>
            < Chat/>
        </>
    );
});


export const Chat = React.memo(() => {

    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        let wsChanel: WebSocket

        const wsHandler = () => {
            setTimeout(createChanel, 3000)
        }


        const createChanel = () => {
            if (wsChanel) {
                wsChanel.removeEventListener("close", wsHandler)
                wsChanel.close()
            }

            wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            wsChanel.addEventListener("close", wsHandler)

            setWs(wsChanel)
        }

        createChanel();

        return () => {
            wsChanel.removeEventListener("close", wsHandler)
            wsChanel.close()
        }
    }, []);


    return (
        <>
            <Messages ws={ws}/>
            <MessagesForm ws={ws}/>
        </>
    );
});


type  MessagesAndMessagesFormPropsType = {
    ws: WebSocket | null
}

export const Messages = React.memo(({ws}: MessagesAndMessagesFormPropsType) => {
    const [messages, setMessages] = useState<WebSocketResponseType[]>([]);


    useEffect(() => {
        const onMessageHandler = (e: MessageEvent) => {
            setMessages((prev) => [...prev, ...JSON.parse(e.data)]);
        }

        ws && ws.addEventListener("message", onMessageHandler)
        return () => {
            ws?.removeEventListener("message", onMessageHandler)
        }
    }, [ws])


    return (
        <div style={{height: "500px", overflowY: "auto"}}>
            {messages.map((message, index: number) => <Message messageData={message} key={index}/>)}
        </div>
    );
});


export const MessagesForm = React.memo(({ws}: MessagesAndMessagesFormPropsType) => {
    const [message, setMessage] = useState<string>("");
    const [isReady, setIsReady] = useState<"pending" | "ready">("pending");


    useEffect(() => {

        const openHandler = () => {
            setIsReady("ready")
        }
        ws && ws.addEventListener("open", openHandler)
        return () => {
            ws?.removeEventListener("open", openHandler)
        }
    }, [ws])


    const sendMessage = () => {
        if (!message) {
            return
        }
        ws && ws.send(message)
        setMessage("")
    }


    return (
        <>
            <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/></div>
            <button disabled={ws === null || isReady !== "ready"} onClick={sendMessage}>Send</button>
        </>
    );
});