import { IS_SUBMITED_FORM } from '../actionTypes';

export const isSubmitedForm = (isSubmited) => {
  return {
    type: IS_SUBMITED_FORM,
    payload: isSubmited,
  };
};
