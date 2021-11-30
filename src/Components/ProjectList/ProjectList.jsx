import React from 'react';
import Projects from '../Projects/Projects';
import './ProjectList.css';
import { products } from '../../data';

const ProjectList = () => {
    return (

        <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Here Is My Projects</h1>
          <p className="pl-desc">
            This is my last three projects. If you want to interest to about my work , please click the Photo
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Projects key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
       
    )
}

export default ProjectList
