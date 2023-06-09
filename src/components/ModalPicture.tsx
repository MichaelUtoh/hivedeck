import ReactModal from 'react-modal';
// import ReactQuill, { Quill } from 'react-quill';
import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onFileChange: (file: File) => void;
}

const ModalPicture: React.FC<ModalProps> = ({ isOpen, onRequestClose, onFileChange }) => {

  const ref = useRef<HTMLInputElement>(null);
  
  const handleFileChange = () => {
    const file = ref.current?.files?.[0];
    if (file) {
      onFileChange(file);
      onRequestClose();
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="custom-modal bg-[#a1a1aa]"
    >
      <div className='bg-white rounded-md p-3'>
        <div className='flex items-center justify-between mb-4 px-2'>
            <p className='font-bold px-1 text-[16px]'>Embed</p>
            <FaTimes className='cursor-pointer mr-2' onClick={onRequestClose} />
        </div>
        <div className='px-3'>
            <p className='mb-2 text-[14px]'>Upload Image</p>
            <small className='text-[10px] uppercase'>File upload</small>
            <div className='bg-[#FAFAFA] border border-dashed border-green-700 flex h-[141px] w-[611px] items-center justify-center mt-2 mb-3 mx-auto'>
              <button onClick={() => {ref.current?.click()}} className='bg-white border-solid border border-[#6CAA7D] p-2 px-4 rounded-[4px] text-[10px]'>
                Import Image from Device
                <input
                  type="file"
                  id="fileInput"
                  style={{display : 'none'}}
                  onChange={handleFileChange}
                  ref={ref}
                />
              </button>
            </div>
            <div className='py-2 text-[14px]'>
              <button className='bg-[#0A7227] hover:bg-green-700 mr-2 text-white rounded-md'>Embed</button>
              <button className='border-solid border border-[#CEE3D4] mr-2 rounded-md' onClick={onRequestClose}>Cancel</button>
            </div>
        </div>
        {/* <AddPictureModal /> */}
      </div>
    </ReactModal>
  );
};

export default ModalPicture;
