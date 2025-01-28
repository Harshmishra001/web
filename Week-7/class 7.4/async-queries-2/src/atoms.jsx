import { atom, selector } from "recoil";
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async () => { 
            const res= await fetch("https://sum-server.100xdevs.com/notifications")
            const result=await res.json()
            return result
    }})
});
// Using a selector as the default for an atom allows you to perform asynchronous operations, like fetching data 
// from a server, directly within the selector. This way, the atom can hold the result of the asynchronous
// operation once it's complete.

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})