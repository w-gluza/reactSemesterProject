import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <nav>
        <ul role="menubar" aria-label="Languages Menu">
          <li>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </li>
          <span>|</span>
          <li>
            <button onClick={() => i18n.changeLanguage('dk')}>dk</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withTranslation('common')(Nav);
