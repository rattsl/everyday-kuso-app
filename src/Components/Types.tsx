export type Task = {
  readonly id: number
  title: string
  checked: boolean
  removed: boolean
};

export type Filter = 'all' | 'unchecked' | 'checked' | 'removed';