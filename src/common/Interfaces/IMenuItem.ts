import ISubMenuItem from './ISubMenuItem';

export default interface IMenuItem {
  id: number;
  name: string;
  path: string | null;
  subMenu: ISubMenuItem[] | [];
}
