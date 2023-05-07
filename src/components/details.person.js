import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SettingOutlined, ApartmentOutlined } from '@ant-design/icons';
import {
  Avatar, Card, Divider,
} from 'antd';
import { Center, VStack, HStack } from '@chakra-ui/react';
import { fetchDetails } from '../api/api.person';

const { Meta } = Card;

const DetailsPerson = () => {
  const { state } = useLocation();
  const statePerson = useSelector((state) => state.persons);

  console.log(statePerson.items[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(state.person_id));
  }, []);

  return (
    <VStack margin={200}>
      <Center w="100vw">
        <Card
          style={{
            width: 300,
          }}
          cover={(
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        )}
          actions={[
            <SettingOutlined key="setting" />,
            <ApartmentOutlined key="genealogy" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={statePerson.items[0]?.person_name}
            description={
                `${statePerson.items[0]?.person_profession} à ${statePerson.items[0]?.person_location}`
            }
          />

          <Divider />
          <VStack>
            <HStack>
              {
                        statePerson.items[0]?.father.id ? (
                          <p>
                            Nom du père:
                            {' '}
                            {statePerson.items[0]?.father.name}
                          </p>
                        ) : (
                          <p>
                            Ajouter le pere de
                            {statePerson.items[0]?.person_fname}
                          </p>
                        )
                    }
            </HStack>
            <HStack>
              {
                        statePerson.items[0]?.mother.id ? (
                          <p>
                            Nom de la mère:
                            {statePerson.items[0]?.mother.name}
                          </p>
                        ) : (
                          <p>
                            Ajouter la mère
                          </p>
                        )
                    }
            </HStack>
          </VStack>
        </Card>
      </Center>
    </VStack>
  );
};

export default DetailsPerson;
