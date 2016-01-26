var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');
var Item = require('./item.jsx');
var CartCount = require('./cartCount.jsx');

var Mall = React.createClass({

    getInitialState: function() {

        return {data: {items: []},
        itemsInCart:[]
        };
    },
    componentDidMount: function() {

        var that = this;

        $.get('./data/items.json', function(data) {
            that.setState({data: data});
        });
    },

    updateCart: function(items) {
        this.setState({itemsInCart: items});
    },

    addItemToCart: function(item) {
        var items = this.state.itemsInCart;
        var existingItem = _.find(items, function(i) {
            return i.id == item.id;
        });

        if(existingItem) {
            existingItem.count = existingItem.count + 1
        } else {
            items.push({
                name: item.name,
                count: 1,
                price: item.price,
                id: item.id
            })
        }
        this.updateCart(items);
    },

    render: function() {
        var items = this.state.data.items;
        var that = this;

        return (
            <div>
                <Navigation projectName="react shopping mall" />

                {items.map(function(item) {
                    return <Item data={item} addItemToCart={that.addItemToCart}/>
                }) }

                <CartCount items = {this.state.itemsInCart}/>
            </div>
        )
    }
});

module.exports = Mall;