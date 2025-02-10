import dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field


class Recipe(BaseModel):
    name: str = Field(description="name of the recipe")
    ingredients: list[str] = Field(description="ingredients of the dish")
    steps: list[str] = Field(description="step to make the dish")


def main() -> None:
    prompt1 = ChatPromptTemplate(
        [
            (
                "system",
                "ユーザーが入力した料理のレシピを考えてください。",
            ),
            ("human", "{dish}"),
        ],
    )
    prompt2 = ChatPromptTemplate(
        [
            (
                "system",
                "ユーザーが入力した料理のレシピを考えてください。レシピには独創的な要素を多分に含めてください。",
            ),
            ("human", "{dish}"),
        ],
    )
    model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    chain1 = prompt1 | model.with_structured_output(Recipe)
    chain2 = prompt2 | model.with_structured_output(Recipe)
    parallel_chain = RunnableParallel(
        {"chain1": chain1, "chain2": chain2},
    )
    result = parallel_chain.invoke({"dish": "カレー"})
    print(result)  # noqa: T201


if __name__ == "__main__":
    dotenv.load_dotenv()
    main()
