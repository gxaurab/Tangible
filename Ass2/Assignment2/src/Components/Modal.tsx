interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg relative">
        <h1 className="text-xl mb-4">This is a Modal Component</h1>
        <p>You clicked to open the modal!</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
