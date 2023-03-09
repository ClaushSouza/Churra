import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgProdutos = ({ active, size }) => {
  const theme = 'light';
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 22 25">
      <Path
        d="M23 6.066v12.065L11.999 24l-11-5.869V6l11-6L23 6.066zM1.999 17.531l9.5 5.069V12.03l-9.5-4.946v10.447zM22 7.143l-9.501 4.889V22.6L22 17.531V7.143zm-5.52 1.716L6.946 3.895 2.597 6.268l9.404 4.896 4.479-2.305zM8.004 3.318l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z"
        fill={fill}
      />
    </Svg>
  );
};

SvgProdutos.defaultProps = {
  active: false,
  size: 20
};

SvgProdutos.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgProdutos;
