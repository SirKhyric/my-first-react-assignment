import React, { Component } from 'react';
import './CharacterCards.css';
import CharacterCardsItems from './_components/CharacterCardsItem';


export class CharacterCards extends Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.characters.map((character) => (
          <CharacterCardsItems
            key={character.name}
            character={character}
          />
        ))}
      </section>
    );
  }
}