export function apiCallRequest(data) {
  return {
    type: '@request/API_CALL_REQUEST',
    payload: { ...data },
  };
}

export function apiCallFinish() {
  return {
    type: '@request/API_CALL_FINISH',
    payload: {},
  };
}
