var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {item: contact, kay: contact.id});
    });
    return (
      <ul className={contactsList}>
        contacts
      </ul>
    );
  }
})
