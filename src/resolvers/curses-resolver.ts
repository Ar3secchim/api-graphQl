import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { courseData } from "../db/curses-data.js";
import { CreateCourseInput } from "../dtos/inputs/create-course-input.js";
import { Course } from "../dtos/models/course-model.js";

@Resolver(() => Course)
export class CursesResolver {
  @Query(() => [Course])
  async courses(): Promise<Course[]> {
    return courseData;
  }

  @Mutation(() => Course)
  async addCourse(@Arg("data", () => CreateCourseInput) data: CreateCourseInput): Promise<Course> {
     const id: any =
       Date.now().toString() + "-" + Math.random().toString(36).slice(2);

    const newCourse = new Course(
      id,
      data.name,
      data.description,
    );

    courseData.push(newCourse);
    return newCourse;
  }

  @Query(() => Course, { nullable: true })
  async course(@Arg("id", () => String) id: string): Promise<Course | undefined> {
    return courseData.find((course) => course.id.toString() === id);
  }
}
