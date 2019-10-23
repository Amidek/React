import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Info = props => (
  <Container>
    <Hero titleText={props.title}
      image={props.image} 
    />
    {ReactHtmlParser(props.description)}

  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Info.defaultProps = {
  title: settings.info.title,
  description: settings.info.description,
  image: settings.info.image,
};


export default Info;