import { useState } from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalLink: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const socials = ['Facebook', 'Twitter', 'Instagram', 'TikTok']
  const [toggleCaption, setToggleCaption] = useState(false)
  const [provider, setProvider] = useState('')
  const [code, setCode] = useState('')
  const [url, setUrl] = useState('')
  const handleProviderInput = (e: any) => {
    setProvider(e.target.value);
  }

  const handleSubmit = () => {
    console.log(provider);
    console.log(code);
    console.log(url);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      // Customize the modalViModalLink's styles if needed
      // overlayClassName="custom-overlay"
      className="custom-modal bg-[#a1a1aa]"
    >
      <div className='bg-white rounded-md p-3'>
        <div className='flex items-center justify-between mb-4 px-2'>
            <p className='font-bold px-1'>Embed</p>
            <FaTimes className='cursor-pointer mr-2' onClick={onRequestClose} />
        </div>
        <div className='px-3'>
          <div className='flex flex-col h-[56px] my-4 w-[611px]'>
            <label className="mb-2 social-media text-[10px] uppercase">Social Media</label>
            <select onChange={(e) => handleProviderInput(e)} className='border border-gray-200 h-[34px] outline-gray-300 px-2 text-[12px]' name="social-media" id="">
              <option value=''>Select a provider</option>
              {
                socials.map((obj, idx) => (
                  <option key={idx} value={obj}>{obj}</option>
                ))
              }
            </select>
          </div>

          <div className='flex flex-col h-[56px] my-4 w-[611px]'>
            <label className="mb-2 social-media text-[10px] uppercase">url</label>
            <input onChange={(e) => setUrl(e.target.value)} className='border border-gray-200 h-[34px] outline-gray-300 px-2 text-[12px]' name="url" placeholder='' id="" />
          </div>

          <div className='flex flex-col h-[56px] my-4 w-[611px]'>
            <label className="mb-2 social-media text-[10px] uppercase">Code</label>
            <input onChange={(e) => setCode(e.target.value)} className='border border-gray-200 h-[34px] outline-gray-300 px-2 text-[12px]' name="code" placeholder='' id="" />
          </div>

          <div className='mb-2 flex items-center justify-between'>
            <p className='text-[12px]'>Disable caption</p>
            <div className={toggleCaption ? 'toggle-container' : 'toggle-container on'} onClick={() => setToggleCaption(!toggleCaption)}>
              <div className='toggle-handle'></div>
            </div>
          </div>

          <div className='py-2 text-[14px]'>
            <button className='bg-green-800 hover:bg-green-700 mr-2 text-white rounded-md' onClick={handleSubmit}>Embed</button>
            <button className='border-solid border border-[#CEE3D4] mr-2 rounded-md' onClick={onRequestClose}>Cancel</button>
          </div>

        </div>

      </div>
    </ReactModal>
  );
};

export default ModalLink;
