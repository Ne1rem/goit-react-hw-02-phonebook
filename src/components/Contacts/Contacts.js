export const Contacts = ({ contacts}) => {
    return (
      <div>
        <ul>
        {contacts.map(contact => (
         <li id={contact.id}>{contact.name}{contact.number}</li>
        ))}
        </ul>
      </div>
    );
  };