import User, {UserDocument} from './user.model';

export function getUserById(id: string) {
  return User.findById(id);
}

export function createUser(user: UserDocument) {
  return User.create(user);
}

export function updateUser(id: string, user: UserDocument) {
  return User.findByIdAndUpdate(id, user, {new: true});
}

export function deleteUser(id: string) {
  return User.findByIdAndDelete(id);
}
