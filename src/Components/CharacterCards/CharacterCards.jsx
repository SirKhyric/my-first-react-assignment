import React, { Component } from 'react';
import './CharacterCards.css';
import CharacterCardsItem from './_components/CharacterCardsItem';


export class CharacterCards extends Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.characters.map((character) => (
          <CharacterCardsItem
            key={character.name}
            character={character}
          />
        ))}
      </section>
    );
  }
}