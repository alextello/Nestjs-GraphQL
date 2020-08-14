import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query(returns => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query(returns => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation(retuns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
