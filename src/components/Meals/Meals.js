import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary';
import Availablemeals from './Availablemeals';


export default function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <Availablemeals/>
    </Fragment>
  )
}
