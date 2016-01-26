var React = require('react');
var Bootstrap = require('react-bootstrap');
var Link = require('react-router-component').Link;

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;

var Navigation = React.createClass({

    render: function() {
        return (
            <Navbar className="navbar navbar-inverse navbar-fixed-top">
                <a className="navbar-brand" href="#">{this.props.projectName}</a>
                <Nav className="nav navbar-nav">
                    <NavItem className="active"><Link href="/home">Home</Link></NavItem>
                    <NavItem><Link href="/mall">Mall</Link></NavItem>
                    <NavItem ><Link href="/cart">Shopping Cart</Link></NavItem>
                    <NavItem >Check Out</NavItem>
                    <DropdownButton title="Dropdown">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = Navigation;
