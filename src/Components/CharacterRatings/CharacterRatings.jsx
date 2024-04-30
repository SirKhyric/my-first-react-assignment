import './CharacterRatings.css';
import CharacterRatingsTableRow from './_components/CharacterRatingsTableRow';


export function CharacterRatings({ characters }) {
  const topCharacters = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);

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
              index={index} 
              character={character} 
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}