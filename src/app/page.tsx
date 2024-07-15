import Link from "next/link";

export default function Index(): JSX.Element {
    return (
        <div>
            <Link href="/auth/login">login</Link>
        </div>
    );
}
