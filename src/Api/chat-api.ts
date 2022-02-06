export type  WebSocketResponseType = {
    message: string
    photo: string
    userId: number
    userName: string
}


let wsChanel: WebSocket | null = null

const wsHandler = () => {
    setTimeout(createChanel, 3000)
}


const createChanel = () => {
    wsChanel?.removeEventListener("close", wsHandler)
    wsChanel?.close()
    wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    wsChanel.addEventListener("message", onMessageHandler)
    wsChanel.addEventListener("close", wsHandler)
}


const onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}


let subscribers = [] as Array<(messages: WebSocketResponseType[]) => void>

export const chatAPI = {
    start() {
        createChanel()
    },
    stop() {
        wsChanel?.removeEventListener("close", wsHandler)
        wsChanel?.close()
        wsChanel?.removeEventListener("message", onMessageHandler)
        subscribers = []
    },
    subscribe(callback: (messages: WebSocketResponseType[]) => void) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: (messages: WebSocketResponseType[]) => void) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        wsChanel?.send(message)
    }
}