import {signIn, signOut, useSession} from "next-auth/react";

const Session = () => {
  const {data: session} = useSession()
  return (
    <div>
      {!session && (
        <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          {/*@ts-ignore*/}
          Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  )
};

export default Session;