import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Center, VStack, Heading } from '@chakra-ui/react';
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
    <VStack margin={200}>
      <Center w="100vw">
        <Heading as="h1" size="4xl" noOfLines={1} color="#99A98F">
          GENEALOGY
        </Heading>
      </Center>
      <Center w="100vw">
        <form className="input__search__person" onSubmit={(e) => handlePerson(e)}>
          <input ref={personName} type="text" placeholder="Person name" />
          <input type="submit" className="btn_green" value="Chercher" />
        </form>
      </Center>
      <Center w="100vw">
        <List
          className="list__person"
          itemLayout="horizontal"
          dataSource={personFund}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.gender === 'M' ? 2 : 1}`} />}
                title={<Link to={`/${item.full_name}`} state={{ person_id: item.id }}>{`${item.full_name}`}</Link>}
                description={item.resume}
              />
            </List.Item>
          )}
        />
      </Center>
    </VStack>

  );
};

export default InputPerson;
