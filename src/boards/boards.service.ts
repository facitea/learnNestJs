import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './DTO/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  //이 함수를 호출하면 boards 배열을 가져올 수 있음.

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);

    return board;

    //이 함수는 제목과, 내용을 받아서 맨위의 boards함수에 넣어주는 역할.
  }

  getBoardById(id: string): Board {
    const found = this.boards.find(board => board.id === id);

    if (!found) {
      throw new NotFoundException('안보여줄거야!');
    }

    return found;
  }/*코드를 이렇게 짜면 http://localhost:3000/boards/asdasd
  위처럼 주소창을 입력했을 때에, {
    "message": "안보여줄거야!",
    "error": "Not Found",
    "statusCode": 404
} 이렇게 뜬다*/

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);

    this.boards = this.boards.filter((board) => board.id! !== found.id);

    //삭제한 경우에는 리턴할 필요 없음.
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id); //board를 id값으로 가져옴
    board.status = status;
    return board;
  }
}




//service 안에서는 데이터베이스와 관련된 로직을 처리할 수 있다.

//데이터베이스에서 데이터를 가져오거나, 데이터베이스 안에 게시판을 생성할 때, 그 생성한 게시판 정보를 넣어주는 등의 로직 처리 가능.

//이 서비스를 사용하려면 모듈 부분에 provisers 항목에 이 서비스가 등록돼야함.