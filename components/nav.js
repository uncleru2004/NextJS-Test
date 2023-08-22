import Link from "next/link";
//import css from './nav.css';

export default function Nav() {
    return <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
}