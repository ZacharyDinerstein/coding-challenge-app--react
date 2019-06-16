import React, { Component } from 'react';
import CardMainContent from './CardMainContent';
import Toggle from '../../Toggle';

export default class Card extends Component {
  render() {
    let { cardData } = this.props;

    return (
      <div className="card card--question">
        <h3 className="card__question">{cardData.question}</h3>
        <Toggle>
          <CardMainContent cardData={cardData} />
        </Toggle>
      </div>
    )
  }
}
