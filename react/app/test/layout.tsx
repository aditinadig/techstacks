
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Theme
            accentColor="grass"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
        >
            Hi Layout
            {children}</Theme>
    );
}
