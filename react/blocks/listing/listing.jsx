var React = require('react');

var Listing = React.createClass({

  render: function() {
    return (
      <div className="listing">
        {this.props.children}
      </div>
    );
  }
});

Listing.Header = React.createClass({
  render: function() {
    return(
    <div className="listing__header">
      {this.props.children}
    </div>
    );
  }
});

Listing.Breadcrumbs = React.createClass({
  render: function() {
    return(
    <div className="listing__breadcrumbs">
      {this.props.children}
    </div>
    );
  }
});

Listing.Title = React.createClass({
  render: function() {
    return(
      <h1 className="listing__title">{this.props.title}</h1>
    );
  }
});

Listing.Sorting = React.createClass({
  render: function() {
    return(
    <div className="listing__sorting">
      {this.props.children}
    </div>
    );
  }
});

Listing.ViewMode = React.createClass({
  render: function() {
    return(
    <div className="listing__view-mode">
      {this.props.children}
    </div>
    );
  }
});

Listing.Content = React.createClass({
  render: function() {
    return (
      <div className="listing__content">
        {this.props.childern}
      </div>
    );
  }
});

Listing.Items = React.createClass({
  render: function() {
    return (
      <div className="listing__items">
        {this.props.childern}
      </div>
    );
  }
});

Listing.Nav = React.createClass({
  render: function() {
    return (
      <div className="listing__Nav">
        {this.props.childern}
      </div>
    );
  }
});

module.exports = Listing;