class User:
    def __init__(self, user_id, username, password_hash):
        self.user_id = user_id
        self.username = username
        self.password_hash = password_hash

    def __str__(self):
        return f"User({self.user_id}, {self.username}, {self.password_hash})"
