from api.domain.project import ProjectStorage, Project
from api.storage.mongo import MgoCrud, MgoDefaultDB

project_collection = MgoDefaultDB['projects']


class ProjectStorageMgo(MgoCrud, ProjectStorage):

    def doc2entity(self, doc):
        return Project(**doc)

    def __init__(self):
        MgoCrud.__init__(self, project_collection)
