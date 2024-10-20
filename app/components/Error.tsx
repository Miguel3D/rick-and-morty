import React from "react";

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-auto max-w-xs rounded-lg bg-white p-4">
        <h2 className="font-bold text-red-600">Error</h2>
        <p>{message}</p>
        <button
          className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
