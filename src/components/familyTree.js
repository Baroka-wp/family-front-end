import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tree from 'react-d3-tree';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { getPersonChildrens } from '../api/api.genealogy';
import AddPerson from './add.person';
import './custom-tree.css';

const FamilyTree = () => {
  const person = useSelector((state) => state.genealogy);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = React.useState({});
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const setNode = (node) => {
    if (node) {
      setSelectedPerson(node.data);
      onOpen();
    }
  };
  const [data, setData] = React.useState({
    name: 'loading...',
    children: null,
  });

  useEffect(() => {
    dispatch(getPersonChildrens(state.person_id));
  }, []);

  useEffect(() => {
    if (!person.loading) {
      setData(person.items);
    }
  }, [person]);

  return (
    <div id="treeWrapper">
      <Box w="100vw" h="100vh">
        <Tree
          style={{ width: '150em', height: '20em' }}
          data={data}
          orientation="vertical"
          onNodeClick={(node) => setNode(node)}
          translate={{
            x: 400,
            y: 200,
          }}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
      </Box>
      <AddPerson isOpen={isOpen} onClose={onClose} person={selectedPerson} />
    </div>
  );
};

export default FamilyTree;
