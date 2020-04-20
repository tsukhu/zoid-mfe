import React from 'react';
import './CardForm.css';
import styled from 'styled-components';
import Flex, { Column } from './Flex';
import Container from './Container';
import Button from './Button';
import Card from './Card';
import Heading from './Heading';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

const Input = styled.input`
  padding: 0.75em;
  margin: .5em 0;
  width: 19.75rem;
  color: ${(props) => props.userName || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const CardForm = ({ userName, onUpdate }) => {
  const {
    meta,
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();
  const [loading, setLoading] = React.useState(false);
  return (
    <Container full small>
      <Flex row contentCenter justifyAround>
        <Card big primary>
          <Heading h5 center>Payment Gateway</Heading>
          <Input defaultValue={userName} type="text" disabled/>
          <PaymentInputsWrapper {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
          <Button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                onUpdate(
                  meta.error ? { status: 'Failure' } : { status: 'Success' }
                );
              }, 3000);
            }}
            loading={loading}
            disabled={meta && meta.error}
          >
            Pay!
          </Button>
        </Card>
      </Flex>
    </Container>
  );
};
export default CardForm;
