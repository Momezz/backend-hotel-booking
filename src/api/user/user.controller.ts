import exp from 'constants';
import {Request, Response} from 'express';
import {getUsers, getUserById, createUser, updateUser, deleteUser} from './user.services';

export async function handleGetUsers(req: Request, res: Response) {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetUser(req: Request, res: Response) {
  const {id} = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateUser(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteUser(req: Request, res: Response) {
  const {id} = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json({message: "User deleted"});
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateUser(req: Request, res: Response) {
  const {id} = req.params;
  const data = req.body;

  try {
    const user = await updateUser(id, data);
    if (!user) {
      return res.status(404).json({message: "User not found to update"});
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
