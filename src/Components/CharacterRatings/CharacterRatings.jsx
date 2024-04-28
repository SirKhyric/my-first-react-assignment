import './CharacterRatings.css';
import CharacterRatingsTableRow from './_components/CharacterRatingsTableRow';

export function CharacterRatings({ characters }) {
  const sortedCharacters = [...characters].sort((a, b) => b.votes - a.votes);
  const topCharacters = sortedCharacters.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <CharacterRatingsTableRow 
              key={character.name} 
              character={character} 
              index={index} 
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}