const CharacterRatingsTableRow = ({ character, index }) => {
  return (
    <tr className={index % 2 === 0 ? 'dark' : 'light'}>
      <td>{character.nickName || character.name}</td>
      <td>{character.skillset.join(', ')}</td>
      <td>{character.votes}</td>
    </tr>
  )
}

export default CharacterRatingsTableRow;