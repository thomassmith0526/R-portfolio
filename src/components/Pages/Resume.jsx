import React from 'react';
// import resume from '../../../utils/resume.pdf'
// import { Document, Page, pdfjs} from 'react-pdf'
import myResume from '../../assets/Resume_test.pdf';

export default function Resume() {

    return (
        <div className= "container pt-4">
            <a href={myResume} download>Download Resume</a>
         </div>
    )
}