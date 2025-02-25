import { UserEntity } from '../User'

describe('User Entity', () => {
  it('should create a valid user', () => {
    const user: UserEntity = {
      id: '1',
      name: 'John',
      email: 'john@example.com',
      role: 'user',
    }

    expect(user.id).toBe('1')
    expect(user.name).toBe('John')
    expect(user.email).toBe('john@example.com')
    expect(user.role).toBe('user')
  })
})