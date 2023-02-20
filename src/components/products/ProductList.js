import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { getProducts } from '../../redux/actions/productActions'

class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const
            { currentCategory, products } = this.props;
        //     currentCategoryProducts = products.categoryId === currentCategory.id;
        // console.log(currentCategoryProducts);
        return (
            <div>
                <h3>
                    <Badge color='warning'>Products</Badge>
                    <Badge color='success'>{currentCategory.categoryName}</Badge>
                </h3>

                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            < tr key={product.id} >
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const
    mapStateToProps = (state) => ({
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }),
    mapDispatchToProps = (dispatch) => ({
        getProducts: bindActionCreators(getProducts, dispatch)
    })

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
