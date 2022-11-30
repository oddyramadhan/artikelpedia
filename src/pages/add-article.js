import FormAdd from '../components/form-add';
import { FiX } from 'react-icons/fi';

export default function AddArticle({ setShowModal }) {
  return (
    <div className="fixed top-0 left-0 z-20 h-full w-full bg-black/50 flex justify-center items-center">
      <div className="bg-white max-w-md w-full p-6 rounded-md">
        <div className="flex justify-end mb-4 hover:cursor-pointer">
          <FiX onClick={() => setShowModal(false)} />
        </div>
        <FormAdd />
      </div>
    </div>
  );
}
