import graphene

from users_app.schema import Query as UsersQuery
from study_app.schema import Query as StudyQuery


class Query(UsersQuery, StudyQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)