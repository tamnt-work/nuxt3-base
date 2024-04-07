import { Mapper, type TransformationMap } from '@tamnt-work/data-mapper'
import type { UserEntity } from './user.entity'
import type { UserModel } from './user.model'

const transformationMap: TransformationMap<UserModel, UserEntity> = {
  id: 'id',
  fullName: 'name',
  username: 'username',
  email: 'email',
  phoneNumber: 'phone',
  companyName: 'company.name',
}

export const UserMapper = new Mapper<UserEntity, UserModel>(transformationMap)
