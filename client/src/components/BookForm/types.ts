import { FormEvent } from 'react';
export type formSectionPropType = {
    nextPage?: () => void,
    prevPage?: () => void,
}
export type formStepsPropsType = {
    currPage:number
}