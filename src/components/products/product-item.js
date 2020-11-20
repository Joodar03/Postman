import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class ProductItem extends Component {
    render() {
        const { title, image, price, addToCart} = this.props
        return (
            <Card style={{minWidth: '18rem', marginTop: '20px'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button onClick={addToCart} variant="primary">Get Product</Button>
                    <p>{price}</p>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;