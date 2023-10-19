import * as React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <>
        <div className='skills' id='skills'>
            <div className='skillsBox'>
                <div className='skillsTitle'>Skills</div>
                <div className='categories'>
                    <div className='categoryBox'>
                        <div className='skillCategory'>Programming</div>
                        <div className='skillsList'>C<br/>C#<br/>HTML/CSS<br/>Java<br/>Javascript<br/>Python<br/>SQL</div>
                    </div>
                    <div className='categoryBox'>
                        <div className='skillCategory'>Framework/Library</div>
                        <div className='skillsList'>Node.js<br/>.NET<br/>React<br/>MaterialUI</div>
                    </div>
                    <div className='categoryBox'>
                        <div className='skillCategory'>Tools</div>
                        <div className='skillsList'>Git<br/>Github<br/>Azure DevOps<br/>Postman<br/>Figma</div>
                    </div>
                    <div className='categoryBox'>
                        <div className='skillCategory'>Misc.</div>
                        <div className='skillsList'>Figma<br/>Ren'Py<br/>Unity</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills; 