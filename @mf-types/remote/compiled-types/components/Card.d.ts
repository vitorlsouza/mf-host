import React from "react";
import '../index.css';
export interface CardProps {
    title?: string;
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
