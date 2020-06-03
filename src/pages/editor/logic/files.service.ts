import { map } from 'lodash';
import { fileRepository } from './files.repository';

export const createFile = async (boardId: string, fileName: string, content: string) =>
  await fileRepository.create(boardId, fileName, content);

export const getFileNames = async (boardId: string) => {
  const files = await fileRepository.getFiles(boardId);
  const fileNames = map(files, value => value?.fileName);
  return fileNames;
};

export const getFileContent = async (boardId: string, fileName: string) => {
  const files = await fileRepository.getFiles(boardId);
  return files && files[fileName]?.content;
};

export const updateFileContent = async (boardId: string, fileId: string, content: string) =>
  await fileRepository.updateFileContent(boardId, fileId, content);
