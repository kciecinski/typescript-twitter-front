import UserInterface from './UserInterface'

export default interface PostInterface {
  _id: string,
  user: UserInterface,
  text: string,
  __v: string
}