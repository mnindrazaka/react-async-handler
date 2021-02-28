import React from "react";

type AsyncStatus = "idle" | "loading" | "success" | "error";

export default function useAsyncHandler<ReturnType>(
  callback: (...args: any[]) => Promise<ReturnType>
): [
  (...args: any[]) => Promise<ReturnType>,
  { status: AsyncStatus; data: ReturnType | null; error: Error | null }
] {
  const [status, setStatus] = React.useState<AsyncStatus>("idle");
  const [data, setData] = React.useState<ReturnType | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const execute = React.useCallback(
    async (...args: any[]) => {
      setStatus("loading");
      setData(null);
      setError(null);
      try {
        const response = await callback(...args);
        setData(response);
        setStatus("success");
        return response;
      } catch (error) {
        setError(error);
        setStatus("error");
        throw error;
      }
    },
    [callback]
  );

  return [execute, { status, data, error }];
}
