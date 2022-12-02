import { useCallback,useEffect,useState } from "react";
import {config,FirebaseApp} from "../../libs/firebase/init";
import {getAuth,GoogleAuthProvider,signInWithPopup,UserCredential,signInWithCredential,signOut,Auth} from "@firebase/auth"

const useAuth = (auth: Auth) => {
    const [state, setState] = useState<'idel' | 'progress' | 'logined' | 'logouted' | 'error'>(
      'idel'
    );
    const [error, setError] = useState<unknown>('');
    const [credential, setCredential] = useState<UserCredential>();
    const dispatch = useCallback(
      (action: { type: 'login'; payload?: { token: string } } | { type: 'logout' }) => {
        setError('');
        switch (action.type) {
          case 'login':
            setState('progress');
            const token = action.payload?.token;
            if (token) {
              signInWithCredential(auth, GoogleAuthProvider.credential(token))
                .then((result) => {
                  setCredential(result);
                  setState('logined');
                })
                .catch((e) => {
                  setError(e);
                  setState('error');
                });
            } else {
              signInWithPopup(auth, provider)
                .then((result) => {
                  setCredential(result);
                  setState('logined');
                })
                .catch((e) => {
                  setError(e);
                  setState('error');
                });
            }
            break;
          case 'logout':
            setState('progress');
            signOut(auth)
              .then(() => {
                setCredential(undefined);
                setState('logouted');
              })
              .catch((e) => {
                setError(e);
                setState('error');
              });
            break;
        }
      },
      [auth]
    );
    return { state, error, credential, dispatch };
  };
  
  const auth = getAuth(FirebaseApp);
  const provider = new GoogleAuthProvider();
  
  const Page = () => {
    const { state, dispatch, credential, error } = useAuth(auth);
    useEffect(() => {
      const token = sessionStorage.getItem('token');
      if (token) {
        dispatch({ type: 'login', payload: { token } });
      }
    }, [dispatch]);
    useEffect(() => {
      if (credential) {
        const token = GoogleAuthProvider.credentialFromResult(credential)?.idToken;
        token && sessionStorage.setItem('token', token);
      } else {
        sessionStorage.removeItem('token');
      }
    }, [credential]);
    const handleLogin = () => dispatch({ type: 'login' });
    const handleLogout = () => dispatch({ type: 'logout' });
    return (
      <div>
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleLogout}>ログアウト</button>
        <div>User: {credential?.user.displayName}</div>
        <div>State: {state}</div>
        <div>Error: {String(error)}</div>
      </div>
    );
  };
  
  export default Page;