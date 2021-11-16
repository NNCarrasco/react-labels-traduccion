
import React from 'react';
import { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import getLabel from '../i18nProvider/getLabel';

export default class TestNahue extends Component {
  render() {
    return (
      <div>
        <h1>{getLabel('test-nahue-title')}</h1>
        <p>{getLabel('test-nahue')}</p>

        {/* ESTE CASO QUEDA UN POCO RARO, 
          PERO NO ENCONTRE UNA FORMA DE QUE QUEDE MEJOR */}
        <FormattedMessage id="test-nahue-placeholder">
          {p => 
           { return (
              <div>
                <label>
                  {getLabel('test-nahue-label')}
                  {/* NOTAR QUE PASA CUANDO SE NECESITA EL STRING EN UN PARAMETRO 
                    DIRECTAMENTE, NO SE ME OCURRE UN CASO MAS COMPLEJO QUE ESTE */}
                  <input type="text" placeholder={p}/>
                </label>
              </div>
            )}
          }
        </FormattedMessage>
      </div>
    );
  }
}
