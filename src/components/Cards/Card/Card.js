import React from 'react';
import './Card.scss';
import {formatDecimal} from '../../../helpers/formatDecimal';

const Card = ({
                id,
                description,
                title,
                subtitle,
                features,
                weight,
                selected,
                selectedText,
                disabled,
                disabledText,
                onClick
              }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <li className={`card ${selected ? 'card--selected' : ''} ${disabled ? 'card--disabled' : ''}`}>
      <article>
        <button className="card__inner" onClick={handleClick}>
          <div className="card__description">{description}</div>
          <h2 className="card__title">{title}</h2>
          <h3 className="card__subtitle">{subtitle}</h3>
          <ul className="card__features">
            {features.map((feature) => <li className="card__features-item">
              <span>{feature.number} </span>{feature.caption}
            </li>)}
          </ul>
          <div className="card__mass">
            <div className="card__mass-number">{formatDecimal(weight, ',')}</div>
            <div className="card__mass-unit">кг</div>
          </div>
        </button>
        {!disabled && !selected && <div className="card__caption">
          Чего сидишь? Порадуй котэ, <button className={'link'} onClick={handleClick} tabIndex={-1}>купи.</button>
        </div>}
        {!disabled && selected && <div className="card__caption">
          {selectedText}
        </div>}
        {disabled && <div className="card__caption">
          {disabledText}
        </div>}
      </article>
    </li>
  );
};


export default Card;
