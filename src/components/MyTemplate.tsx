// React-email
import { Html, Button, Hr, Text } from "@react-email/components";

export default function MyTemplate() {
    return (
        <Html lang="en">
            <Text>Some title</Text>
            <Hr />
            <Button href="https://example.com">Click me</Button>
        </Html>
    );
}
