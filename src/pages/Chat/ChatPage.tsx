import React, {useEffect, useState} from 'react';
import {Message} from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessageListening, stopMessageListening} from "../../redux/chat-reduсer";
import {StateReduxType} from "../../redux/redux-store";


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

    // const [ws, setWs] = useState<WebSocket | null>(null);

    // useEffect(() => {
    //     let wsChanel: WebSocket
    //
    //     const wsHandler = () => {
    //         setTimeout(createChanel, 3000)
    //     }
    //
    //
    //     const createChanel = () => {
    //         if (wsChanel) {
    //             wsChanel.removeEventListener("close", wsHandler)
    //             wsChanel.close()
    //         }
    //
    //         wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    //         wsChanel.addEventListener("close", wsHandler)
    //
    //         setWs(wsChanel)
    //     }
    //
    //     createChanel();
    //
    //     return () => {
    //         wsChanel.removeEventListener("close", wsHandler)
    //         wsChanel.close()
    //     }
    // }, []);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessageListening())
        return () => {
            dispatch(stopMessageListening())
        }
    }, []);


    return (
        <>
            <Messages/>
            <MessagesForm/>
        </>
    );
});


type  MessagesAndMessagesFormPropsType = {
    ws: WebSocket | null
}

export const Messages = React.memo(() => {
    const messages = useSelector<StateReduxType, WebSocketResponseType[]>(state => state.chatReducer.messages)


    // useEffect(() => {
    //     const onMessageHandler = (e: MessageEvent) => {
    //         setMessages((prev) => [...prev, ...JSON.parse(e.data)]);
    //     }
    //
    //     ws && ws.addEventListener("message", onMessageHandler)
    //     return () => {
    //         ws?.removeEventListener("message", onMessageHandler)
    //     }
    // }, [ws])


    return (
        <div style={{height: "500px", overflowY: "auto"}}>
            {messages.map((message, index: number) => <Message messageData={message} key={index}/>)}
        </div>
    );
});


export const MessagesForm = React.memo(() => {
    const [message, setMessage] = useState<string>("");
    const [isReady, setIsReady] = useState<"pending" | "ready">("pending");
    const dispatch = useDispatch()


    // useEffect(() => {
    //
    //     const openHandler = () => {
    //         setIsReady("ready")
    //     }
    //     ws && ws.addEventListener("open", openHandler)
    //     return () => {
    //         ws?.removeEventListener("open", openHandler)
    //     }
    // }, [ws])


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage("")
    }


    return (
        <>
            <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/></div>
            <button  onClick={sendMessageHandler}>Send</button>
        </>
    );
});