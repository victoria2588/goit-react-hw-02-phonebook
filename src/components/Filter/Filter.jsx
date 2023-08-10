export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </label>
  );
};
