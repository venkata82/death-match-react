import React from 'react';

import 'dmc/css/components/header.min.css';

export default React.createClass({

  displayName: 'Header',

  propTypes: {},

  render() {
    return (
     	<header className="header">
	    	<h1 className="header__title">
	        Death 
	          <span className="header__logo"></span>
	        Match
	        </h1>
		  </header>
    );
  }

});


