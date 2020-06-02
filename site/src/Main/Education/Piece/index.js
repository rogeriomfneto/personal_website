import React from 'react';
import "./index.css";

export default props => (
    <div className="Piece">
        <div className="Piece-image">
            <img src={props.src} alt={props.alt} />
        </div>
        <div className="Piece-text">
            <h3>
                {props.university}
            </h3>
            <p>
                <strong>
                    {props.degree}
                </strong>
            </p>
            <p>
                {props.duration}
            </p>
        </div>
    </div>
)