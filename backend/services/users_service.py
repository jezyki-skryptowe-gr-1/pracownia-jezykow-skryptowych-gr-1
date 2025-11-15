from ..decorators import singleton
from ..config import AppConfig


@singleton
class UsersService:
    """
    Singleton users service
    """

    def __init__(self) -> None:
        self.config = AppConfig.get_instance()

    def register(self, login, password):
        # todo
        pass

    def login(self, login, password):
        # todo
        pass

    def refresh_token(self):
        # todo
        pass
