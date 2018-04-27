import { login, startLogin, logout, startLogout } from '../../actions/auth';

test('should set login action correctly', () => {
  const uid = 'ABC123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should set logout action correctly', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});