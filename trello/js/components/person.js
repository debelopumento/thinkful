import React from 'react';

export default function Person(props) {
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl} />
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
}

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};