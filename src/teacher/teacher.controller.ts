import { Body, Controller, Post } from "@nestjs/common";
import { CreateTeacherDto } from "./teacher.dto";
import { TeacherService } from "./teacher.service";


@Controller("teachers")
export class ProductController {
    constructor(private readonly teacherService: TeacherService ){}

  @Post()
  async createTeacher(@Body() data: CreateTeacherDto) {
    const teacher = await this.teacherService.createTeacher;
    console.log(teacher);
  }

}