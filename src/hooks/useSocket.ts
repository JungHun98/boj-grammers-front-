import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

let socketInstance: Socket | null = null;

function createSocket(url: string): Socket {
  if (!socketInstance) {
    try {
      socketInstance = io(url, {
        transports: ['websocket'],
        autoConnect: true,
        reconnection: true,
      });

      if (socketInstance === null) {
        throw new Error('Socket instance is null');
      }

      socketInstance.on('connect', () => {});
    } catch (error) {
      console.error('Failed to initialize Socket.IO:', error);
      throw new Error('Socket.IO initialization failed');
    }
  }

  return socketInstance;
}

function useSocket(url: string): Socket {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!socketInstance) {
      socketRef.current = createSocket(url);
    }
  }, [url]);

  return socketInstance as Socket;
}

export default useSocket;
