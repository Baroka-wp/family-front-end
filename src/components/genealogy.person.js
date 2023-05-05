import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AnimatedTree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import { getPersonChildrens } from '../api/api.genealogy';

const Genealogy = () => {
  const person = useSelector((state) => state.genealogy);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonChildrens(state.person_id));
  }, []);

  return (
    <div className="container genealogy_container">
      <AnimatedTree
        data={person?.items[0]?.get_family_tree || []}
        height={300}
        width={400}
      />
    </div>
  );
};

export default Genealogy;
