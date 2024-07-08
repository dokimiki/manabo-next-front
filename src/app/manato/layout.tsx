export default async function ManatoLayout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
}
