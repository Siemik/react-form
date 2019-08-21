var Contact = React.createClass({
  propTypes: {
    iteam: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto: '+ this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});
