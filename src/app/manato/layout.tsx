import Footer from "./Footer";
import Header from "./Header";

export default function ManatoLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
