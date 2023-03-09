import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgLocalizacao = ({ active, size }) => {
  const theme = 'light';
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 22 24">
      <Path
       d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"
        fill={fill}
      />
    </Svg>
  );
};

SvgLocalizacao.defaultProps = {
  active: false,
  size: 20
};

SvgLocalizacao.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgLocalizacao;
