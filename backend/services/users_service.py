from decorators import singleton
from config import AppConfig
from repository.users_repository import create_user, get_all_users, get_user_by_username, hash_password


@singleton
class UsersService:
    """
    Singleton users service
    """

    def __init__(self) -> None:
        self.config = AppConfig.get_singleton()

    def register(self, login, password):
        create_user(login, password)

    def check_password(self, login, password):
        user = get_user_by_username(login)
        if user is None:
            return False

        return user.password_hash == hash_password(password)

    def refresh_token(self):
        pass
