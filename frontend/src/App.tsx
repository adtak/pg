import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import config from "./amplify-config";
Amplify.configure(config);

function App() {
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

export default App;
