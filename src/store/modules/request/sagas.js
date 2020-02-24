import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { apiCallFinish } from './actions';

function* apiRequest({ payload }) {
  const { name, lib, bio, additionalExperience, startDate } = payload;

  try {
    yield api.post('/recruitment-surveys', {
      name,
      bio,
      favoriteJsLibrary: lib,
      additionalExperience,
      startDate: Date(startDate),
    });

    toast.success('Sua inscrição foi finalizada com sucesso!');
    yield put(apiCallFinish());
  } catch (err) {
    toast.error('Algo deu errado, por favor tente novamente');
    yield put(apiCallFinish());
  }
}

export default all([takeLatest('@request/API_CALL_REQUEST', apiRequest)]);
