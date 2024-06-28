import { Authenticator } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
