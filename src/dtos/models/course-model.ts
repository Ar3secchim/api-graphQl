import { Field, ID, ObjectType } from "type-graphql";
import { Category } from "./category-model.js";

@ObjectType()
export class Course {
  constructor(
    id: typeof ID,
    name: string,
    description: string,
    categoryId: Category["id"]
  ) {
    this.id = id!;
    this.name = name!;
    this.description = description;
    this.categoryId = categoryId!;
  }

  @Field(() => ID)
  id: typeof ID;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  categoryId: string;
}
