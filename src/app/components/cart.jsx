var React = require('React');

var CartItem = require('./cartItem.jsx');
var Navigation = require('./navigation.jsx');

var Cart = React.createClass({

    getCartTotal: function() {
        return _.reduce(this.props.items, function(account, item) {
            return account + (item.count * item.price);
        }, 0);
    },

    render: function() {
        var items = this.props.items == undefined ? [] : this.props.items;
        return (
            <div>
                <Navigation projectName="react shopping mall"/>

                <h3>Cart</h3>

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
            </div>
        )
    }
});

module.exports = Cart;
