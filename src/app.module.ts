import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';


@Module({
  imports: [BoardsModule],
})
export class AppModule {}



//request로 Get 요청이 오면 Controller에서 Get 메소드가 동작한다.
//컨트롤러에서 service로 요청을 보내고 service 내의 getHello가 작동한다.
//return값을 브라우저에 다시 response한다.

//express.js도 server진입점에 request가 오면 router가 어떤 요청인지 분류한 후 알맞은 컨트롤러를 연결해준다

//nest.js는 app.module.js진입점에 request가 오면 controller가 어떤 요청인지 분류한 후 알맞은 service를 연결해준다