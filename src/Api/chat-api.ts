export type  WebSocketResponseType = {
    message: string
    photo: string
    userId: number
    userName: string
}


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
}


const onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}


let subscribers = [] as Array<(messages: WebSocketResponseType[]) => void>

export const chatAPI = {
    subscribe(callback: (messages: WebSocketResponseType[]) => void) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    }
}