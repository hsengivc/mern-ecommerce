import React, { FunctionComponent } from "react";

interface IRatingProps {
  value: number;
  text?: string;
  color?: string;
}

interface IStarProps {
  value: number;
  rating1: number;
  rating2: number;
  color?: string;
}

export const Rating: FunctionComponent<IRatingProps> = ({
  value,
  text,
  color,
}: IRatingProps) => {
  const ratingIconClassName = (
    value: number,
    rating1: number,
    rating2: number
  ): string => {
    if (value >= rating1) return "fas fa-star";
    else if (value >= rating2) return "fas fa-star-half-alt";
    else return "far fa-star";
  };

  const StarElement: FunctionComponent<IStarProps> = ({
    value,
    rating1,
    rating2,
    color,
  }: IStarProps) => {
    return (
      <span>
        <i
          style={{ color }}
          className={ratingIconClassName(value, rating1, rating2)}
        ></i>
      </span>
    );
  };

  return (
    <div className="rating">
      <StarElement value={value} rating1={1} rating2={0.5} />
      <StarElement value={value} rating1={2} rating2={1.5} />
      <StarElement value={value} rating1={3} rating2={2.5} />
      <StarElement value={value} rating1={4} rating2={3.5} />
      <StarElement value={value} rating1={5} rating2={4.5} />
      {text && <span>{text}</span>}
    </div>
  );
};
