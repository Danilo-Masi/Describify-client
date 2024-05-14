//Flowbite
import { Alert } from "flowbite-react";

interface AlertMessageProps {
  colorType: string;
  message: string;
}

export default function AlertMessage({ colorType, message }: AlertMessageProps) {
  return (
    <Alert color={colorType}>
      <p className="font-medium">{message}</p>
    </Alert>
  );
}
