import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../index';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useUser = () => {
  return useAppSelector(state => state.user);
};
