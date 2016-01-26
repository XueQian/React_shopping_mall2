var React = require('react');
var Bootstrap = require('react-bootstrap');
var ModalTrigger = Bootstrap.ModalTrigger;

var Navigation = require('./navigation.jsx');
var Item = require('./item.jsx');
var Cart = require('./cart.jsx');
var Link = require('react-router-component').Link;

var Mall = React.createClass({

    getInitialState: function() {

        return {
            items: []
        };
    },

    caculateCount: function() {

        return _.reduce(this.props.items, function(account, item) {
            return account + item.count;
        }, 0);
    },

    render: function() {
        var items = this.props.items;

        return (
            <div>
                <Navigation projectName="react shopping mall"/>

                <ModalTrigger modal={<Cart items={items} />}>
                    <Link href="/cart">
                        <span className="badge">{this.caculateCount()}</span>
                        <span>ShoppingCart</span>
                    </Link>
                </ModalTrigger>
            </div>
        )
    }
});

module.exports = Mall;