import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCategory, getCategories } from '../../redux/actions/categoryActions'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { getProducts } from '../../redux/actions/productActions'
class CategoryList extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    selectCategory = (category) => {
        this.props.changeCategory(category)
        this.props.getProducts(category.id)
    }

    render() {
        const { categories, currentCategory } = this.props
        return (
            <div>
                <h4>
                    <Badge color='warning'>Categories</Badge>
                    {/* {categories.length} */}
                </h4>
                <ListGroup>
                    {categories.map(category => (
                        <ListGroupItem
                            key={category.id}
                            onClick={() => this.selectCategory(category)}
                            active={currentCategory.id === category.id}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                {/* <h5>{currentCategory.categoryName ? `Current Category : ${currentCategory.categoryName}` : ""}</h5> */}
            </div>
        )
    }
}

const
    mapStateToProps = (state) => ({
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }),
    mapDispatchToProps = (dispatch) => ({
        getCategories: bindActionCreators(getCategories, dispatch),
        changeCategory: bindActionCreators(changeCategory, dispatch),
        getProducts: bindActionCreators(getProducts, dispatch)
    })

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)