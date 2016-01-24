var React = require('React');

var CartItem = require('./cartItem.jsx');

var Cart = React.createClass({

    getInitialState: function() {
        return {
            items: this.props.items
        }
    },
    showBlankMessage: function() {
        return <p>empty cart</p>
    },
    getCartTotal: function() {
        return _.reduce(this.props.items, function(account, item) {
            return account + (item.count * item.price);
        }, 0);
    },
    renderItems: function() {
        var items = this.state.items;
        return (
            <div>
                <h5>Total {this.getCartTotal()} </h5>
                <table>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    {items.map(function(item) {
                        return <CartItem key={item.id} item={item}/>
                    })}
                </table>
            </div>
        )
    },
    render: function() {
        var items = this.state.items;
        return (
            <div>
                <h3>Cart</h3>
                { items.length > 0 ? this.renderItems() : this.showBlankMessage() }
            </div>
        )
    }
});

module.exports = Cart;
