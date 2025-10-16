import { randomUUID } from "node:crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { categoryData } from "../db/category-data.js";
import { CreateCategoryInput } from "../dtos/inputs/create-category-input.js";
import { Category } from "../dtos/models/category-model.js";

@Resolver(() => Category)
export class CategoriesResolver {

  @Query(() => [Category])
  async listCategories(): Promise<Category[]> {
    return categoryData;
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg("data", () => CreateCategoryInput) data: CreateCategoryInput,
  ): Promise<Category> {
    const id: any = randomUUID().toString();

    const newCategory = new Category(
      id,
      data.name,
      data.description,
    );

    categoryData.push(newCategory);
    return newCategory;
  }

  @Query(() => Category, { nullable: true })
  async findCategoryById(@Arg("id", () => String) id: string): Promise<Category | undefined> {
    return categoryData.find((category) => category.id.toString() === id);
  }
}
