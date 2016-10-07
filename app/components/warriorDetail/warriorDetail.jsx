import React from 'react';
import Warrior from 'warrior';
import {IMAGE_PATH} from 'constants/appConstants';

import 'dmc/css/components/warriorDetail.min.css';

export default React.createClass({

    displayName: 'WarriorDetail',

    propTypes: {
        warrior: React.PropTypes.object,
        onClickHandler: React.PropTypes.func,
        warriorDetailCssClass: React.PropTypes.string
    },

    render() {

        let cssClass = "warrior-detail";
        if (this.props.warriorDetailCssClass) cssClass = cssClass + ' ' + this.props.warriorDetailCssClass;

        let warrior = (this.props.warrior) ?
            <figure className={cssClass} onClick={this.props.onClickHandler}>
                <Warrior image={this.props.warrior.image}/>
                <figcaption className="warrior-detail__caption">
                    <div className="warrior-detail__name">{this.props.warrior.name}</div>
                    <div className="warrior-detail__wins">{this.props.warrior.wins}</div>
                </figcaption>
            </figure> : null;

        return warrior;

    }

});

