import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} name={item.name} number={item.number}>
          <ContactItem item={item} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};
