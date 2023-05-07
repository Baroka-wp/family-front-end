/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  FormControl,
} from '@chakra-ui/react';
import {
  Modal, DatePicker, Button, Input, Select,
} from 'antd';
// import { fetchPersonByname } from '../api/api.person';

const AddPerson = ({ isOpen, onClose, person }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal
      title={`Ajouter un enfant de ${person.name}`}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="submit" color="#99A98F" loading={loading} onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >

      {/* <FormControl display="flex" justifyContent="space-evenly" gap={5}>
        <Select
          mode="multiple"
          showSearch
          placeholder="Inserted are removed"
          style={{ width: '100%' }}
          optionFilterProp="children"
          onKeyDown={(e) => handleSearchMother(e.target.value)}
          options={mother}
        />
      </FormControl> */}

      <FormControl mt={4} display="flex" justifyContent="space-evenly" gap={5}>
        <Input placeholder="Nom" />
        <Input placeholder="Prénom" />
      </FormControl>

      <FormControl mt={4} display="flex" justifyContent="space-evenly" gap={5}>
        <Input placeholder="Residence actuel" />
        <Input placeholder="Profession" />
      </FormControl>

      <FormControl mt={4} display="flex" justifyContent="space-evenly" gap={10}>
        <Select
          placeholder="Sexe"
          allowClear
          style={{ width: 120 }}
          options={[{ value: 'M', label: 'Mâle' }, { value: 'F', label: 'Femelle' }]}
        />
        <DatePicker placeholder="Né le" width={100} onChange={onChange} />
        <DatePicker placeholder="Mort le" onChange={onChange} />
      </FormControl>

    </Modal>
  );
};

export default AddPerson;
