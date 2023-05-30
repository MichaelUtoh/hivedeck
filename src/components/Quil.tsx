import { useState } from 'react'
import ReactQuil from 'react-quill'
import 'react-quill/dist/quill.snow.css';

interface ChildProps {
    onValueFromChild: (value: number) => void;
}


const Quil = ({onValueFromChild}: ChildProps) => {

    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    }

    const getWordCount = () => {
        const text = value.replace(/(<([^>]+)>)/gi, '');
        const words = text.trim().split(/\s+/);
        onValueFromChild(words.length);
        return words.length;
    };

    return (
        <div className='top-wrapper'>
            <p className='article-title my-4'>This is the title</p>
            <ReactQuil
                preserveWhitespace={true}
                style={{borderBottom: 'none', minHeight: '30vh', maxHeight: '50vh', overflowY: 'scroll', width: '700px'}}
                theme="snow"
                modules={modules}
                value={value}
                onChange={setValue}
                // onValueFromChild={}
            />
            <p className='hidden'>{getWordCount()}</p>
        </div>
    )
}

export default Quil
