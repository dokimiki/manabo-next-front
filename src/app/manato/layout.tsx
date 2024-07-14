export default function ManatoLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
}
