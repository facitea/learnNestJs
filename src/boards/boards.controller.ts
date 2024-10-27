import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateBoardDto } from './DTO/create-board.dto';

//컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환한다
//핸들러란. @Get, @Post, @Delete, @Patch 등의 데코레이터이며, ()괄호 안에는 "/"등의 엔드포인트가 들어간다.

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) { }
  //사실 BoardsService라는 타입은 없다.
  //그런데 private 키워드를 사용하여 암묵적으로 자체의 타입을 사용하도록 만든 것이다.

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body() createBoardDto: CreateBoardDto
    // @Body('title') title: string,
    // @Body('description') description: string
  ): Board { //@Body('title') title 하면 title을 가져오게 됨, 전체를 가져오려면 @Body() body 하면 됨

    return this.boardsService.createBoard(createBoardDto);
  }
  //Postman을 이용해 post를 http://localhost:3000/boards에 시도하면 결과물이 나오게 된다.

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    //@Param() 공란으로 쓰면 모두 가져오게 됨
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string, //주소 끝의 파라미터 값을 추출
    @Body('status') status: BoardStatus //body내의 값을 추출
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  //@Param() 용도: URL 경로(엔드포인트)에서 **경로 매개변수(path parameter)**를 추출합니다. 사용 예: 주로 특정 자원을 식별하기 위해 id와 같은 값을 URL 경로에서 직접 추출할 때 사용됩니다.

  //@Body() 용도: HTTP 요청의 **본문(body)**에서 데이터를 추출합니다. 사용 예: 주로 클라이언트가 서버로 데이터를 보낼 때, 예를 들어 사용자 생성이나 업데이트 요청과 같이 JSON 데이터를 요청 본문에 담아 전달하는 경우 사용됩니다.

}

//컨트롤러에 들어가는 값은 /boards인거고, 겟에 들어가는 값은 /인거임
//점점 깊게 들어가는 것


//service는 @Injectable(주입가능한) 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용가능하다

//D.I(종속성 주입, Dependency Injection)

//module 파일에서 Provider를 등록해줘야 privider를 사용할 수 있다.



