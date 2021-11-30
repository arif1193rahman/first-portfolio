import React from 'react';
import Projects from '../Projects/Projects';
import './ProjectList.css';
import { products } from '../../data';

const ProjectList = () => {
    return (

        <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire. It's Lama</h1>
          <p className="pl-desc">
            Lama is a creative portfolio that your work has been waiting for.
            Beautiful homes, stunning portfolio styles & a whole lot more awaits
            inside.
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
