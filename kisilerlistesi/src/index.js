import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

const Person = ({img,name,job,children}) =>
{
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className="person">
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () =>
{
  return(
    <section className="person-list">
      <Person img="28" name="Hasan" job="Frontend Developer">
        <p>Frontend Developer</p>
      </Person>
      <Person img="34" name="Hakan" job="Software Developer">
        <p>Software Developer</p>
      </Person>
      <Person img="38" name="Onur" job="Net Developer">
        <p>Net Developer</p>
      </Person>
    </section>
  );
};

ReactDOM.render(<PersonList/>,document.getElementById("root"));