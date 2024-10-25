import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { Controller, Get, Post, Body } from '@nestjs/common';

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
    @Body('title') title: string,
    @Body('description') description: string
  ): Board { //@Body('title') title 하면 title을 가져오게 됨, 전체를 가져오려면 @Body() body 하면 됨

    return this.boardsService.createBoard(title, description);
  }
  //Postman을 이용해 post를 http://localhost:3000/boards에 시도하면 결과물이 나오게 된다.
}

//컨트롤러에 들어가는 값은 /boards인거고, 겟에 들어가는 값은 /인거임
//점점 깊게 들어가는 것


//service는 @Injectable(주입가능한) 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용가능하다

//D.I(종속성 주입, Dependency Injection)

//module 파일에서 Provider를 등록해줘야 privider를 사용할 수 있다.



