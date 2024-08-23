import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { UserAction } from '../types/user';
import { RootState } from '../store/reducers';

type AppDispatch = ThunkDispatch<RootState, void, UserAction>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
