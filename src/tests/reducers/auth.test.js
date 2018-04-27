import authReducer from '../../reducers/auth';

test('Should update state from login action', () => {
  const uid = '123abc';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('Should update state from logout action', () => {
  const uid = 'abc123';
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({ });
});