from ..decorators import singleton
from ..config import AppConfig
from ..repository.users_repository import create_user, get_all_users


@singleton
class UsersService:
    """
    Singleton users service
    """

    def __init__(self) -> None:
        self.config = AppConfig.get_singleton()

    def register(self, login, password):
        #create_user(login, password)
        pass

    def login(self, login, password):
        pass

    def refresh_token(self):
        pass
