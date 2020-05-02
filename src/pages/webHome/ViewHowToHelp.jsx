import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import IdentifySymptoms from '../../assets/PNG/BROKEN ARM.png';
import ImproveDiagnostics from '../../assets/PNG/ASK A DOCTOR.png';
import HelpGovernments from '../../assets/PNG/SHIFT ROTATION.png';

const howToHelp = [
  {
    title: 'webHome.howToHelp1.title',
    description: 'webHome.howToHelp1.description',
    image: IdentifySymptoms
  },
  {
    title: 'webHome.howToHelp2.title',
    description: 'webHome.howToHelp2.description',
    image: ImproveDiagnostics
  },
  {
    title: 'webHome.howToHelp3.title',
    description: 'webHome.howToHelp3.description',
    image: HelpGovernments
  },
];

/**
* View login social media
* This function returns a view with the icons Google, Facebook and Apple
*/
function ViewHowToHelp() {
  return (
    howToHelp.map(help => (
      <Grid item xs={12} sm={4} key={help.title} alignContent="center">
        <div className="help">
          <img src={help.image} />
          <Typography variant="h6">
            <FormattedMessage id={help.title}></FormattedMessage>
          </Typography>
          <br />
          <FormattedMessage id={help.description}></FormattedMessage>
        </div>
      </Grid>
    ))
  );
}

ViewHowToHelp.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default ViewHowToHelp;
