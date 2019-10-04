import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';


const OrderForm = props => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary summaryCost={props.tripCost}/>
        </Col>
      </Row>
    </Grid>
  </Section>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
};

export default OrderForm;