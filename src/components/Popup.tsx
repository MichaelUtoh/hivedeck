import {useState} from 'react'
import { AiFillPicture } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import ModalPicture from './ModalPicture';
import ModalVideo from './ModalVideo';
import ModalLink from './ModalLink';


const Popup = () => {
    const [clickBtn, setClickBtn] = useState(false);
    const [text, setText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleTextChange = (value: string) => {
        setText(value);
    };
    const openModal = (text: string) => {
        if (text === 'pictures') {
            setText('pictures');
        } else if (text === 'videos') {
            setText('videos')
        } else if (text === 'links') {
            setText('links')
        }
        setIsModalOpen(true);
        setClickBtn(!clickBtn)
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleClickBtn = () => {
        setClickBtn(!clickBtn);
    }
    const addImageFunc = () => {}
    const addVideoFunc = () => {}
    const addLinkFunc = () => {}

    return (
        <div className="flex flex-col h-[32vh] justify-start my-[10px] px-2">
            <div
                onClick={handleClickBtn}
                className="bg-[#E7F1E9] cursor-pointer flex items-center justify-center w-[30px] mb-1 ml-2 p-2 px-5 rounded-full"
            >
                +
            </div>

            { 
                clickBtn &&
                <div className="popup-select-box">
                    <p className='text-[14px] font-thin uppercase' style={{marginBottom: '2px', padding: '3px 15px'}}>Embeds</p>
                    <div className="btn" onClick={() => openModal('pictures')}>
                        <AiFillPicture className='icons' />
                        <div className='popup-category'>
                            <span className='popup-category-title text-[12px]'>Picture</span>
                            <span className='popup-category-sm text-[8px]'>jpeg, png</span>
                        </div>
                    </div>
                    <p className="btn" onClick={() => openModal('videos')}>
                        <FaVideo className='icons' />
                        <span className='popup-category'>
                            <span className='popup-category-title text-[12px]'>Video</span>
                            <span className='popup-category-sm text-[8px]'>JW player, Youtube, Vimeo</span>
                        </span>
                    </p>
                    <p className="btn" onClick={() => openModal('links')}>
                        <IoShareSocial className='icons' />
                        <span className='popup-category'>
                            <span className='popup-category-title text-[12px]'>Social</span>
                            <span className='popup-category-sm text-[8px]'>Instagram, Tik Tok, Snapchat, Facebook</span>
                        </span>
                    </p>
                </div>
            }
            {text === 'pictures' && <ModalPicture isOpen={isModalOpen} onRequestClose={closeModal} />}
            {text === 'videos' && <ModalVideo isOpen={isModalOpen} onRequestClose={closeModal} />}
            {text === 'links' && <ModalLink isOpen={isModalOpen} onRequestClose={closeModal} />}
        </div>
    )
}

export default Popup