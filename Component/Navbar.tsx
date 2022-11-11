import { Navbar,Nav,Button, SSRProvider } from "react-bootstrap"
import {useSession,signIn,signOut} from 'next-auth/react'
import Link from "next/link";
import { writeFile, writeFileSync } from "fs";

const NAVBAR = () => {
    const {data:session} = useSession();

    if(session && session.user){
        let json = JSON.stringify(session);
        console.log(json);
        return(
            <Navbar bg="warning" expand="md" color='yellow-400'>
                <Navbar.Toggle className='me-auto'/>
                <Navbar.Brand className='me-auto'><Link href="/"><b>ホーム</b></Link></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Events">Event</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <p>
                    <>
                        ユーザ：{session.user.name} <br />
                        <Button variant='primary' onClick={() => signOut()}>Sign out</Button>
                    </>
                </p>
            </Navbar>
        )
    }
    return(
        <Navbar bg="warning" expand="md" color='yellow-400'>
            <Navbar.Toggle className='me-auto'/>
            <Navbar.Brand href="#home" className='me-auto'><b>ホーム</b></Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Events">Event</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <p>
                <>
                    Not signed in <br />
                    {/* 変更 */}
                    <Button variant="primary" onClick={() => signIn('google')}>Sign in</Button>
                </>
            </p>
        </Navbar>
    )
}

export default NAVBAR

