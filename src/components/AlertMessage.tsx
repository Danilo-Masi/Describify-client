import { Dispatch, SetStateAction, useEffect } from "react";
//Flowbite
import { Alert } from "flowbite-react";

interface AlertMessageProps {
  message: string;
  setAlertOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AlertMessage({ message, setAlertOpen }: AlertMessageProps) {

  useEffect(() => {
    const interval = setTimeout(() => {
      setAlertOpen(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-start md:px-2 fixed top-[85%] md:top-[90%] z-[100]">
      <Alert color="failure">
        <p className="flex items-center justify-center gap-x-3">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </span>
          {message}
        </p>
      </Alert>
    </div>
  );
}
