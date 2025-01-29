import dotenv
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field


class Recipe(BaseModel):
    ingredients: list[str] = Field(description="ingredients of the dish")
    steps: list[str] = Field(description="step to make the dish")


def main() -> None:
    output_parser = PydanticOutputParser(pydantic_object=Recipe)
    prompt = ChatPromptTemplate(
        [
            (
                "system",
                "ユーザーが入力した料理のレシピを考えてください。¥n¥n{format_instructions}",
            ),
            ("human", "{dish}"),
        ],
    ).partial(
        format_instructions=output_parser.get_format_instructions(),
    )
    model = ChatOpenAI(model="gpt-4o-mini", temperature=0).bind(
        response_format={"type": "json_object"},
    )
    chain = prompt | model | output_parser
    result = chain.invoke({"dish": "カレー"})
    print(result)  # noqa: T201


if __name__ == "__main__":
    dotenv.load_dotenv()
    main()
