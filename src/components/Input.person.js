import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonByname } from '../api/api.person';
// import { v4 as uuidv4 } from 'uuid';

const InputPerson = () => {
  const state = useSelector((state) => state.persons);
  const [personFund, setPersonFund] = useState([]);

  useEffect(() => {
    setPersonFund(state.items?.result);
  }, [state]);

  const personName = useRef();
  const dispatch = useDispatch();

  const handlePerson = (e) => {
    e.preventDefault();
    dispatch(fetchPersonByname(personName.current.value));
  };
  return (
    <div className="input__container">
      <form className="input__search__person" onSubmit={(e) => handlePerson(e)}>
        <input ref={personName} type="text" placeholder="Person name" />
        <input type="submit" className="btn_green" value="Chercher" />
      </form>

      <div className="input__result__person">

        {

          personFund.map((person) => (
            <div className="input__result__person__item" key={person.id}>

              <p>{person}</p>

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default InputPerson;
