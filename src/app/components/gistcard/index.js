import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.css';
import Badge from '../badge';
import Octicon from 'react-octicon';

export default class GistCard extends PureComponent {
    splitDate = (dateString) => {

        let split = dateString.split('T');
        return split[0];
    }
    render() {
        const { gistData } = this.props;
        const noOfFiles = Object.keys(gistData.files).length;



        return (
            <Link to={{ pathname: `/${gistData.id}`, state: { description: gistData.description, files: gistData.files } }}>
                <li className="list-row">
                    <div className='header_wrapper'>
                        <div className='img_title'>
                            <div className='img_circle' style={{ backgroundImage: `url(${gistData.owner.avatar_url})` }}></div>
                            <div className='main_title'>{gistData.owner.login}</div>
                        </div>
                        <div className='list'>
                            <ul>
                                <li><Octicon name="code" mega /> {noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</li>
                                <li><Octicon name="repo-forked" mega /> Forks</li>
                                <li><Octicon name="comment" mega /> Comments</li>
                                <li><Octicon name="star" mega /> Stars</li>
                            </ul>
                        </div>
                    </div>
                    <ul className='dates'>
                        <li>
                            Created at: {this.splitDate(gistData.created_at)}
                        </li>
                        <li>Last updated: {this.splitDate(gistData.updated_at)}</li>
                    </ul>


                    <p className="lead">{(gistData.description) || 'No Description'}</p>
                    <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                    <Badge files={gistData.files} />
                </li>
            </Link>
        );
    }
}

GistCard.propTypes = {
    gistData: PropTypes.object.isRequired
}

