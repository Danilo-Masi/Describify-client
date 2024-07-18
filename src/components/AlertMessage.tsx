import { Dispatch, SetStateAction, useEffect, useCallback } from "react";
// Flowbite
import { Alert } from "flowbite-react";
// omponents
import { AlertIcon } from "./SvgComponents";

interface AlertMessageProps {
  color?: string;
  message: string;
  setAlertOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultProps: Partial<AlertMessageProps> = {
  color: 'failure',
};

export default function AlertMessage({
  color = defaultProps.color,
  message,
  setAlertOpen,
}: AlertMessageProps) {

  const closeAlert = useCallback(() => {
    setAlertOpen(false);
  }, [setAlertOpen]);

  useEffect(() => {
    const interval = setTimeout(closeAlert, 5000);
    return () => clearTimeout(interval);
  }, [closeAlert]);

  return (
    <div className="w-full flex items-center justify-center md:justify-start md:px-2 fixed top-[85%] md:top-[90%] z-[100]">
      <Alert color={color}>
        <p className="flex items-center justify-center gap-x-3">
          <AlertIcon />
          {message}
        </p>
      </Alert>
    </div>
  );
}