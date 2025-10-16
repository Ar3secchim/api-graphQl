import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Category {
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
