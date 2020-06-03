export interface File {
  fileName?: string;
  createdAt?: string;
  updatedAt?: string;
  content?: string;
}

export interface Board {
  files: {
    [name: string]: File | undefined;
  };
}

export interface Boards {
  [key: string]: Board | undefined;
}
