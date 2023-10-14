import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateTeacherDto } from "./teacher.dto";

@Injectable()
export class TeacherService{
    constructor(private readonly prismaService: PrismaService) {}

    async createTeacher(createTeacherDto: CreateTeacherDto){
        const teacher = await this.prismaService.teacher.create({data:createTeacherDto})

        return teacher
    }

}