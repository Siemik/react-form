var Contact = React.createClass({
  propTypes: {
    iteam: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://zenoncar.com/wp-content/uploads/2015/08/zenon-icons-profile-01.png'
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
