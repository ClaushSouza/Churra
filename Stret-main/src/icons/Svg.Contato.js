import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgContato = ({ active, size }) => {
  const theme = 'light';
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 22 25">
      <Path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513L10.698 6l-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"
        fill={fill}
      />
    </Svg>
  );
};

SvgContato.defaultProps = {
  active: false,
  size: 20
};

SvgContato.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgContato;
