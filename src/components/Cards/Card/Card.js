import React from 'react';
import './Card.scss';

const Card = ({
                children,
                description,
                title,
                subtitle,
                features,
                mass,
                ctaLink,
                selected,
                selectedText,
                disabled,
                disabledText,
              }) => {
  return (
    <li className="card">
      <div className="card__inner">
        <div className="card__desctiption">{description}</div>
        <h2 className="card__title">{title}</h2>
        <h2 className="card__subtitle">{subtitle}</h2>
        <ul className="card__features">
          {features.map((feature) => <li className="card__features-item">
            <span>{feature.number} </span>{feature.caption}
          </li>)}

        </ul>
        <div className="card__mass">
          <div className="card__mass-number">{mass}</div>
          <div className="card__mass-unit">кг</div>
        </div>
      </div>
      {!disabled && !selected && <div className="card__caption">
        Чего сидишь? Порадуй котэ, <a href={ctaLink}>купи.</a>
      </div>}
      {selected && <div className="card__caption">
        {selectedText}
      </div>}
      {disabled && <div className="card__caption">
        {disabledText}
      </div>}
    </li>
  );
};

Card.Caption = ({children}) => <div
  className="card__caption card__caption--default"
>
  {children}
</div>;


export default Card;
