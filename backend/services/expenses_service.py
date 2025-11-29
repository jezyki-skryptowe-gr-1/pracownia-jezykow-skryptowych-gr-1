from ..decorators import singleton


@singleton
class ExpensesService:
    def __init__(self):
        pass

    def add_expense(self, category, amount):
        # todo
        expense_id = 123
        return expense_id

    def update_expense(self, expense_id, category, amount):
        # todo
        pass

    def delete_expense(self, expense_id):
        # todo
        pass