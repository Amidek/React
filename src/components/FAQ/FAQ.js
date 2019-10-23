import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const FAQ = props => (
  <Container>
    <Hero titleText={props.title}
      image={props.image} 
    />
    {ReactHtmlParser(props.description)}
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
  
FAQ.defaultProps = {
  title: settings.FAQ.title,
  description: settings.FAQ.description,
  image: settings.FAQ.image,
};
  

export default FAQ;