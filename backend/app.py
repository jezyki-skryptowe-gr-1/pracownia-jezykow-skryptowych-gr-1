from __future__ import annotations

import os
from typing import Optional

from flask import Flask, jsonify, request
from flask_cors import CORS

from .config import Config
from .services.expenses_service import ExpensesService


def create_app() -> Flask:
    cfg = Config.get_instance()

    app = Flask(__name__)

    # CORS
    if cfg.cors_allow_all:
        CORS(app)
    else:
        origins = [o.strip() for o in cfg.cors_origins.split(",") if o.strip()]
        CORS(app, resources={r"/*": {"origins": origins}})

    @app.get("/health")
    def health():
        return jsonify({"status": "ok"}), 200

    @app.get("/api/v1/expenses")
    def get_expenses():
        service = ExpensesService.get_instance()
        return jsonify({"expenses": ["expense1", "expense2"]}), 200

    return app


app = create_app()


if __name__ == "__main__":
    cfg = Config.get_instance()
    port = int(os.getenv("PORT", cfg.port))
    app.run(host=cfg.host, port=port, debug=cfg.debug)