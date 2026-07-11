import { Session, User } from "@supabase/supabase-js";
import { createContext, useState, useEffect, FC, useContext, ReactComponentElement } from "react";



type context = {
    session?: Session | null
    user?: User | null,
    setSession?:(session:Session)=>void,
    setUser?:(user:User)=>void
}
const authContext = createContext<context>({ session: null, user: null,setSession:()=>{},setUser:()=>{}})






const ContextProvider = (props: any) => {
    const useAuth = useContext(authContext)
    const [session, setSession] = useState<Session | null>()
    const [user, setUser] = useState<User | null>()

    
    return <authContext.Provider value={{setSession:(session:Session)=>setSession(session!),setUser:(user:User)=>setUser(user!)}}>
        {props.children!}
    </authContext.Provider>
}

export { ContextProvider }


export const useAuth = () => {
    return useContext(authContext)
}