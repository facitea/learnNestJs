import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //앱 생성
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


//DTO란, Data Transfer Object
//request, response에 property가 엄청 많을 경우, 여러곳에서 이용하는데 한 곳에서만 property 이름을 바꿔줘야 할 경우, 모든 곳의 property를 바꿔줘야한다.


//pipe란 컨트롤러로 요청이 들어오기 전에 작동하는 것이다.
//@Injectable() 데코레이터를 사용하여 선언한다.
//데이터가 컨트롤러로 전달되기 전에 변환 및 검증을 수행하는 중요한 도구이다.
//빌트인 파이프와 커스텀 파이프를 통해 데이터를 다루는 방식을 효율적으로 관리할 수 있으며, 프로젝트의 데이터 유효성을 높여준다.
//data transfometaion이란, 입력 데이터를 원하는 형식으로 변환하는 것. 예)문자->숫자
//data vaildation이란, 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달하는 것. 그렇지 않으면 예외를 발생시킴
//핸들러레벨, 파라미터레벨, 글로벌레벨의 파이프가 있음