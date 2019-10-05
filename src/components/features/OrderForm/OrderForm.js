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
          <OrderSummary tripCost={props.tripCost} options={props.options} />
        </Col>
      </Row>
    </Grid>
  </Section>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;