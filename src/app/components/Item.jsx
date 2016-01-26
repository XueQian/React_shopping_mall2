var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Item = React.createClass({

    render: function() {

        var item = this.props.data;
        return (
            <div key={item.id} className="col-sm-6 col-md-3">
                <div className="panel panel-success" key={item.id}>
                    <div className="panel-heading">
                        <h4 className="panel-title">{item.name} -- ￥{item.price}</h4>
                    </div>
                    <div className="panel-body text-center nopadding">
                        <img src={item.image} width="200px" height="200px"/>
                    </div>
                    <button className="btn btn-primary" onClick={this.props.addItemToCart.bind(this,item)}>
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }
});

//{React.cloneElement(this.props.children, {items: this.state.itemsInCart})}

module.exports = Item;