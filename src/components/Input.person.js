import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, List } from 'antd';
import { fetchPersonByname } from '../api/api.person';

const InputPerson = () => {
  const state = useSelector((state) => state.persons);
  const [personFund, setPersonFund] = useState([]);

  useEffect(() => {
    setPersonFund(state.items || []);
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

      <List
        className="list__person"
        itemLayout="horizontal"
        dataSource={personFund}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.gender === 'M' ? 2 : 1}`} />}
              title={<Link to={`/${item.first_name} ${item.last_name}`} state={{ person_id: item.id }}>{`${item.first_name} ${item.last_name}`}</Link>}
              description={item.resume}
            />
          </List.Item>
        )}
      />
    </div>

  );
};

export default InputPerson;
