import { database } from '../../../logic/data-base/data-base';
import { Boards, File } from './files.model';
import { getNow } from '../../../logic/date-time/date-time.service';

const BOARDS_NODE = 'boards';
const FILES_NODE = 'files';

class FileRrepository {
  boardsRef: firebase.database.Reference;

  constructor() {
    this.boardsRef = database.ref(BOARDS_NODE);
  }

  async create(boardId: string, fileName: string, content: string) {
    const file: File = {
      fileName: fileName,
      createdAt: getNow(),
      updatedAt: getNow(),
      content,
    };

    await this.boardsRef
      .child(boardId)
      .child(FILES_NODE)
      .update({
        [fileName]: file,
      });
  }

  async getFiles(boardId: string) {
    const snapshot = await this.boardsRef.once('value');
    const boards: Boards = snapshot.val();
    console.log('boards', boards);

    const files = boards[boardId]?.files;
    console.log('files', files);
    return files;
  }

  async updateFileContent(boardId: string, fileName: string, content: string) {
    const file: File = {
      fileName: fileName,
      content,
      updatedAt: getNow(),
    };

    await this.boardsRef
      .child(boardId)
      .child(FILES_NODE)
      .update({
        [fileName]: file,
      });
    console.log('update on database');
  }
}

export const fileRepository = new FileRrepository();
