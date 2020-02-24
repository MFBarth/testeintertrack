import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@request/API_CALL_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@request/API_CALL_FINISH': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
