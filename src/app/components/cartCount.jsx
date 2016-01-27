var React = require('react');
var Bootstrap = require('react-bootstrap');
var ModalTrigger = Bootstrap.ModalTrigger;

var Navigation = require('./navigation.jsx');
var Cart = require('./cart.jsx');
var Link = require('react-router-component').Link;

var CartCount = React.createClass({

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

                <ModalTrigger modal={<Cart items={items}/>}>
                    <a href="/#mall">
                        <span className="badge">{this.caculateCount()}</span>
                        <span>ShoppingCart</span>
                    </a>
                </ModalTrigger>
            </div>
        )
    }
});

module.exports = CartCount;