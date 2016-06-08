import React from 'react'

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
    )
  }

});


