import React from 'react';
import './Projects.css';

const Projects = ({ img, link }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
        //     <div className="project">
        //         <div className="project-browser">
        //             <div className="project-circle"></div>
        //             <div className="project-circle"></div>
        //             <div className="project-circle"></div>
        //         </div>
        //         <a href={link} target="_blank" rel="noreferrer">
        //     <img src={img} alt="" className="project-img" />
        //   </a>
        //     </div>
    )
}

export default Projects
