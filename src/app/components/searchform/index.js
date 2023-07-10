import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllGists } from '../../redux/actions/allgists';
import Octicon from 'react-octicon';

class SearchFormInner extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let username = this.inputRef.current.value.trim();

        //if user has not typed anything
        if (username.length === 0) {
            return;
        }
        //dispatch
        this.props.fetchAllGists(username);
    }
    render() {
        return (
            <div className='topheader'><Octicon name="mark-github" mega />
                <form onSubmit={this.handleSubmit.bind(this)} className="searchform">

                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search Gists for the username"
                        ref={this.inputRef} />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGists: (username) => {
            dispatch(fetchAllGists(username));
        }
    }
}

let SearchForm = connect(null, mapDispatchToProps)(SearchFormInner);
export default SearchForm;
