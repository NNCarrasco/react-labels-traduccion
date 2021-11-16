import React from 'react';
import { FormattedMessage } from 'react-intl';


const getLabel = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default getLabel;
