export interface TableProps {
  header: string[];
  body: ICell[];
  onIconClick: (id: number | null) => void;
}

export interface ICell {
  id: number;
  data: string[];
}
