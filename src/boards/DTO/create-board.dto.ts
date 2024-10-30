import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

//DTO를 이용해 들어오는 데이터의 구조와 타입을 정의하여 타입 안전성을 높이고, 데이터 유효성 검사를 가능하게 한다.

//class validator 라이브러리의 IsNotEmpty를 이용해 유효성 체크를 한다.