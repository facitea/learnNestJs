import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],//사용할 컨트롤러를 넣는다.
  providers: [BoardsService]//사용할 서비스를 넣는다.
})
export class BoardsModule {}


//컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환한다
