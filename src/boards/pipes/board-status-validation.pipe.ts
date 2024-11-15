import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

//커스텀 파이프 만드는 법

export class BoardStatusValidaionPipe implements PipeTransform { //PipeTransform은 커스텀 파이프 만들려면 있어야 함.
  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`)
    }

    // transform(value: any, metadata: ArgumentMetadata) {
    //   console.log('value', value); //처리가 된 인자의 값
    //   console.log('metadata', metadata); //인자에 대한 메타데이터를 포함한 객체

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);

    return index !== -1;
  }
}

/*
커스텀 파이프를 만드는 과정임
DTO를 끌어와서 상단에 명시 
PipeTransform, transform은 커스텀 파이프 만들려면 있어야 함.
PRIVATE와 PUBLIC만 허용하도록 만드는 것이 목적
value 값을 대문자로 바꿔주고
isStatusValid함수는 status를 받아서 이 함수가 StatusOptions에 부합하는지 indexOf 함수를 활용해 판단함
값이 status에 포함되어 있으면 index를 뱉고, 아니면 -1을 뱉음
-1만 아니면 index를 뱉어준다
함수 끝에서 리턴문을 통해 index면 true를 -1이면 false를 뱉게 만든다
if문을 통해 false면 error를 뱉고 true면 value를 뱉게 해준다.
*/
