import { Body, Controller, Get, Param, Post , Delete } from "@nestjs/common";
import { CreateTeacherDto } from "./teacher.dto";
import { TeacherService } from "./teacher.service";


@Controller("teachers")
export class TeacherController {
    constructor(private readonly teacherService: TeacherService ){}

  @Post()
  createTeacher(@Body() data: CreateTeacherDto) {
    console.log(data);
    const teacher = this.teacherService.createTeacher(data);

    return teacher
  }

  @Get()
  async findAll(){
    const teachers = await this.teacherService.getAllTeacher();

    return {count: teachers?.length, data:{ teachers}}
  }

  @Get(':id')
  async getSingleTeacher(@Param('id') id:string){

    const singleTeacher = await this.teacherService.getSingleTeacher(+id);

    return singleTeacher
  }

  @Post(':id')
  updateSingleTeacher(@Param('id') id:string , @Body() data: CreateTeacherDto) {
    console.log(data);
    const teacher = this.teacherService.updateSingleTeacher(+id , data);

    return teacher
  }

  @Delete(':id')
  removeSingleTeacher(@Param('id') id:string) {
    
    const teacher = this.teacherService.removeSingleTeacher(+id);

    return teacher
  }

}