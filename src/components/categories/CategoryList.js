import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories } from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap'
class CategoryList extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories, currentCategory } = this.props
        return (
            <div>
                <h4>CategoryList {categories.length}</h4>
                <p>Current Category : {currentCategory.categoryName}</p>
                <ListGroup>
                    {categories.map(category => (
                        <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
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
        getCategories: bindActionCreators(getCategories, dispatch)
    })

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)