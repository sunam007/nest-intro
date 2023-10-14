import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateTeacherDto } from "./teacher.dto";

@Injectable()
export class TeacherService{
    constructor(private readonly prismaService: PrismaService) {}

    async createTeacher(data: CreateTeacherDto){

        const teacher = await this.prismaService.teacher.create({data})

        return teacher
    }

    async getAllTeacher(){

        const teacher = await this.prismaService.teacher.findMany()

        return teacher
    }

    async getSingleTeacher(id:number){ 

        const teacher = await this.prismaService.teacher.findUnique({ where: {id} } )

        return teacher
    }

    async updateSingleTeacher(id:number , data: CreateTeacherDto){ 

        const teacher = await this.prismaService.teacher.update({ where: {id} , data: data } )

        return teacher
    }

    async removeSingleTeacher(id:number){ 

        const teacher = await this.prismaService.teacher.delete({ where: {id}} )

        return teacher
    }

}