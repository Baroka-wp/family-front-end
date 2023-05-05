import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPersonChildrens } from '../api/api.genealogy';

import Tree from './tree';

const FamilyTree = () => {
  const person = useSelector((state) => state.genealogy);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonChildrens(state.person_id));
  }, []);

  return (
    <div>
      <Tree data={[person?.items[0]?.get_family_tree] || []} />
    </div>
  );
};

export default FamilyTree;
