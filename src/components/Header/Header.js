import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.t('header.h1')}</h1>
      </header>
    );
  }
}

export default withTranslation('common')(Header);
