export interface TableProps {
  header: string[];
  body: ICell[];
  onIconClick: (id: number | null) => void;
  hasRights: boolean;
}

export interface ICell {
  id: number;
  data: string[];
}
